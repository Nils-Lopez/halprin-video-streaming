import { NextSeo } from 'next-seo';
import { MainLayout } from '@/components/layout/main-layout';
import { useTranslation } from 'next-i18next';
import { homeConfig } from './home.config';

type Props = {
  children?: never;
};

export const HomePage: React.FC<Props> = () => {
  const { t } = useTranslation(homeConfig.i18nNamespaces);

  return (
    <>
      <NextSeo
        title={t('home:page.title')}
        description="See https://github.com/contredanse/life-art"
      />
      <MainLayout>Hello</MainLayout>
    </>
  );
};
