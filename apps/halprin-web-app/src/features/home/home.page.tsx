import { MainLayout } from '@/components/layout/main-layout';
import { useTranslation } from 'next-i18next';
import { Video } from './components/video';
import { homeConfig } from './home.config';

type Props = {
  children?: never;
};

export const HomePage: React.FC<Props> = () => {
  const { t } = useTranslation(homeConfig.i18nNamespaces);

  return (
    <>
      <MainLayout>
        <h1>Hello word {t('home:page.test')}</h1>
        <Video />
      </MainLayout>
    </>
  );
};
