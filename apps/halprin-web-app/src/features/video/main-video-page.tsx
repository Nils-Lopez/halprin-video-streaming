import { MainLayout } from '@/components/layout/main-layout';
import { useTranslation } from 'next-i18next';
import { videoConfig } from './video.config';
import * as S from './main-video-page.style';
import { VideoPlayer } from '@/features/video/components/video-player';
import React from 'react';
import { VideoNavbar } from './components/video-navbar';
import { VideoFooter } from './components/video-footer';

type Props = {
  children?: never;
};
export const MainVideoPage: React.FC<Props> = () => {
  const { t } = useTranslation(videoConfig.i18nNamespaces);

  return (
    <>
      <MainLayout>
        <S.Ctn>
          <VideoNavbar categories={['corps', 'esprit', 'mouvement']} />
          <VideoPlayer url={'https://vimeo.com/169599296'} />
          <VideoFooter />
        </S.Ctn>
      </MainLayout>
    </>
  );
};
