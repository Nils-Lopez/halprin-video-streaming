import { MainLayout } from '@/components/layout/main-layout';
import * as S from './main-video-page.style';
import { VideoPlayer } from '@/features/video/components/video-player';
import React, { useState, useEffect } from 'react';
import { VideoNavbar } from './components/video-navbar';
import { VideoFooter } from './components/video-footer';
import { SupportedLang } from '@/features/video/types';
import { MediaRepo } from '@/features/video/repository/media.repo';
import { TagLabelRepo } from '@/features/video/repository/tag-label.repo';
import { isNonEmptyString } from '@contredanse/common';
import { Media, MediaCategorySlug, MediaTag, Tag } from '@/data/data.types';

type Props = {
  lang: SupportedLang;
  categorySlug?: MediaCategorySlug;
  tagSlugs: string[];
  searchType: string;
  children?: never;
  pageId?: string;
};

export const MainVideoPage: React.FC<Props> = (props) => {
  const { lang, categorySlug, tagSlugs, searchType } = props;
  const [selectedVideo, selectVideo] = useState<Media>({ thumb: 'false' });
  const [videoTags, setVideoTags] = useState<Tag[]>([
    { tag_slug: 'false', label: { fr: 'false', en: '' } },
  ]);

  const media =
    searchType === 'category'
      ? new MediaRepo().search({
          ...(isNonEmptyString(categorySlug)
            ? { categories: [categorySlug] }
            : {}),
        })
      : new MediaRepo().search({
          ...(isNonEmptyString(tagSlugs[0]) ? { tagSlugs: [tagSlugs[0]] } : {}),
        });

  useEffect(() => {
    if (
      (media[0] &&
        selectedVideo.tags &&
        selectedVideo.tags[0].tag_slug === '') ||
      !media.includes(selectedVideo)
    ) {
      selectVideo(media[0]);
    }
  }, [media]);

  useEffect(() => {
    if (
      selectedVideo &&
      selectedVideo.tags &&
      selectedVideo.tags[0].tag_slug !== ''
    ) {
      const mediaTags: Tag[] = [];
      selectedVideo.tags.map((tag: MediaTag) => {
        const tagData =
          tag.tag_slug && new TagLabelRepo().findBySlug(tag.tag_slug);
        const label = tagData ? tagData.label : { fr: '', en: '' };
        mediaTags.push({
          tag_slug: tag.tag_slug,
          relevance: tag.relevance,
          label: label,
        });
      });
      setVideoTags(mediaTags);
    }
  }, [selectedVideo]);

  // todo on mettra la bonne après
  const url =
    'https://player.vimeo.com/external/583334078.sd.mp4?s=685558fc99397ec030c0866c145927d29e602e30&profile_id=165';

  return (
    <>
      <MainLayout>
        <S.Ctn>
          <VideoNavbar categories={videoTags} lang={lang} />
          <VideoPlayer url={url} />
          <VideoFooter
            lang={lang}
            media={media}
            selectedVideo={selectedVideo}
            selectVideo={selectVideo}
          />
        </S.Ctn>
      </MainLayout>
    </>
  );
};
