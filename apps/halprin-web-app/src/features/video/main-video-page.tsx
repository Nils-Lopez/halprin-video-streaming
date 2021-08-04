import { MainLayout } from '@/components/layout/main-layout';
import { useTranslation } from 'next-i18next';
import { videoConfig } from './video.config';
import * as S from './main-video-page.style';
import { VideoPlayer } from '@/features/video/components/video-player';
import React from 'react';
import { VideoNavbar } from './components/video-navbar';
import { VideoFooter } from './components/video-footer';
import {
  getVideosFromCategory,
  getVideoUrlFromPageId,
} from '@/features/video/data-repository';

type Props = {
  children?: never;
  pageId?: string;
};

export const MainVideoPage: React.FC<Props> = (props) => {
  const { pageId = 'test' } = props;
  const { t } = useTranslation(videoConfig.i18nNamespaces);
  const lang = 'en';
  return (
    <>
      <MainLayout>
        <S.Ctn>
          <VideoNavbar categories={['corps', 'esprit', 'mouvement']} />
          <VideoPlayer url={getVideoUrlFromPageId(pageId)} />
          <VideoFooter videos={getVideosFromCategory('workshop', lang)} />
        </S.Ctn>
      </MainLayout>
    </>
  );
};
