import { MainLayout } from '@/components/layout/main-layout';
import * as S from './tag-index.style';
import React, { useEffect, useState } from 'react';
import { NavbarIndex } from './components/navbar-index';
import { FooterIndex } from './components/footer-index';
import { ContainerIndex } from './components/container-index';
import { TagRepo } from '../video/repository/tag.repo';
import { TagLabelRepo } from '../video/repository/tag-label.repo';
import { SupportedLang } from '@/features/video/types';
import { CreditsRepo } from '../credits/repository/credits.repo';
import { MediaRepo } from '../video/repository/media.repo';
import { CleanedCredit, Media, MediaTag, Tag } from '@/data/data.types';
import { EmbedMobile } from '../menu/embed/embed-mobile';

type Props = {
  lang: SupportedLang;
};

export const TagIndexPage: React.FC<Props> = (props) => {
  const { lang } = props;

  const [selectedTag, setSelectedTag] = useState<Tag>({
    label: { en: 'false', fr: '' },
    media: [],
  });
  const [selectedCred, selectCred] = useState<CleanedCredit>({
    label: 'false',
    index: true,
    id: 0,
  });
  const [selectedMedia, selectMedia] = useState<Media>({ thumb: 'false' });
  const [selectedVideo, selectVideo] = useState<Media>({ thumb: 'false' });
  const [videoTags, setVideoTags] = useState<Tag[]>([]);
  const [indexMedia, setIndexMedia] = useState<string[]>(['false']);

  const tagRepo = new TagRepo();

  const tags: { slug: string; tag: Tag }[] = Array.from(
    tagRepo.getMediaByTags(),
    ([slug, tag]) => ({ slug, tag })
  );

  const creditsRepo = new CreditsRepo();

  const credits = creditsRepo.getCredits();

  const mediaRepo = new MediaRepo();

  const creditsLabel: { label: string; id: number }[] = [];

  credits.map((credit) => {
    if (credit.index) {
      const slug =
        lang === 'en'
          ? credit.htmlLabel.en.split('</')[0].split('>')[2]
          : credit.htmlLabel.fr.split('</')[0].split('>')[2];
      creditsLabel.push({ label: slug, id: credit.id });
    }
  });

  useEffect(() => {
    if (
      selectedVideo &&
      selectedVideo.thumb !== 'false' &&
      selectedVideo.tags
    ) {
      const mediaTags: Tag[] = [];
      selectedVideo.tags.map((tag: MediaTag) => {
        const tagData = tag.tag_slug
          ? new TagLabelRepo().findBySlug(tag.tag_slug)
          : null;
        tag.label = tagData ? tagData.label : { fr: '', en: '' };
        mediaTags.push({
          tag_slug: tag.tag_slug,
          label: tag.label,
          relevance: tag.relevance,
        });
      });
      setVideoTags(mediaTags);
    }
  }, [selectedVideo]);

  useEffect(() => {
    if (selectedCred && selectedCred.label !== 'false') {
      const media = mediaRepo.findByCredits(selectedCred.id);
      setSelectedTag({
        label: { fr: selectedCred.label, en: selectedCred.label },
        media: media,
      });
      selectVideo(media[0]);
    }
  }, [selectedCred]);

  useEffect(() => {
    if (indexMedia[0] === 'true') {
      const media = mediaRepo.get();
      const titles: string[] = [];
      media.map((media) => {
        if (media.title) {
          const title = lang === 'en' ? media.title.en : media.title.fr;
          titles.push(title);
        }
      });
      setIndexMedia(titles.sort());
    }
  }, [indexMedia]);

  return (
    <MainLayout>
      <EmbedMobile
        lang={lang}
        index={{ selectTag: setSelectedTag, selectVideo: selectVideo }}
      />
      <S.Ctn>
        <NavbarIndex
          tags={tags}
          videoTags={videoTags}
          selectedVideo={selectedVideo}
          lang={lang}
          setIndexMedia={setIndexMedia}
          indexMedia={indexMedia}
        />
        <ContainerIndex
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          selectedVideo={selectedVideo}
          selectVideo={selectVideo}
          selectedCred={selectedCred}
          selectCred={selectCred}
          selectMedia={selectMedia}
          tags={tags}
          credits={creditsLabel}
          lang={lang}
          indexMedia={indexMedia}
        />
        <FooterIndex
          selectedTag={selectedTag}
          selectedVideo={selectedVideo}
          selectVideo={selectVideo}
          selectedMedia={selectedMedia}
          lang={lang}
        />
      </S.Ctn>
    </MainLayout>
  );
};
