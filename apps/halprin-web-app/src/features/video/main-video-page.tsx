import { MainLayout } from '@/components/layout/main-layout';
import * as S from './main-video-page.style';
import { VideoPlayer } from '@/features/video/components/video-player';
import React, { useState } from 'react';
import { VideoNavbar } from './components/video-navbar';
import { VideoFooter } from './components/video-footer';
import { SupportedLang } from '@/features/video/types';
import { MediaRepo } from '@/features/video/repository/media.repo';
import { mediaCategoryData } from '@/data/media-category.data';
import { isNonEmptyString } from '@contredanse/common';
import { MediaCategorySlug } from '@/data/data.types';

type Props = {
  lang: SupportedLang;
  categorySlug?: MediaCategorySlug;
  children?: never;
  pageId?: string;
};

export const MainVideoPage: React.FC<Props> = (props) => {
  const { lang, categorySlug } = props;
  const [playedVideo, setPlayedVideo] = useState(null);

  const media = new MediaRepo().search({
    // Optionally search also by tagSlugs
    //tagSlugs: ['keywords']
    ...(isNonEmptyString(categorySlug) ? { categories: [categorySlug] } : {}),
  });

  // todo on mettra la bonne après
  const url =
    'https://player.vimeo.com/external/583334078.sd.mp4?s=685558fc99397ec030c0866c145927d29e602e30&profile_id=165';

  return (
    <>
      <MainLayout>
        <S.Ctn>
          <VideoNavbar categories={mediaCategoryData} lang={lang} />
          <VideoPlayer url={url} />
          <VideoFooter
            lang={lang}
            media={media}
            playedVideo={playedVideo}
            setPlayedVideo={setPlayedVideo}
          />
        </S.Ctn>
      </MainLayout>
    </>
  );
};
