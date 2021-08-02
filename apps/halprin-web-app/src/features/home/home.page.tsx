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
      <MainLayout>
        <h1>Hello word {t('app:page.test')}</h1>
      </MainLayout>
    </>
  );
};
