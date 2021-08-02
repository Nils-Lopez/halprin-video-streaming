import { MainLayout } from '@/components/layout/main-layout';
import { useTranslation } from 'next-i18next';
import { videoConfig } from './video.config';
import * as S from './main-video-page.style';
import { VideoPlayer } from '@/features/video/components/video-player';

type Props = {
  children?: never;
};
export const MainVideoPage: React.FC<Props> = () => {
  const { t } = useTranslation(videoConfig.i18nNamespaces);

  return (
    <>
      <MainLayout>
        <S.Ctn>
          <h1>Hello word {t('app:page.title')}</h1>
          <VideoPlayer url={'https://www.youtube.com/watch?v=ysz5S6PUM-U'} />
        </S.Ctn>
      </MainLayout>
    </>
  );
};
