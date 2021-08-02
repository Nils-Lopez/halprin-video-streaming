import { NextSeo } from 'next-seo';
import { MainLayout } from '@/components/layout/main-layout';
import { Banner } from '@/components/banner';
import { useTranslation } from 'next-i18next';
import { demoConfig } from './demo.config';
import Image from 'next/image';
import { DemoApiSection } from './sections/demo-api.section';

type Props = {
  children?: never;
};

export const DemoPage: React.FC<Props> = () => {
  const { t } = useTranslation(demoConfig.i18nNamespaces);

  return (
    <>
      <NextSeo
        title={t('demo:page.title')}
        description="Web-app nextjs monorepo example, https://github.com/contredanse/life-art"
      />
      <MainLayout>
        <Banner />
        <h3>I'm the halprin web-app</h3>
        <Image
          src={'/shared-assets/images/nextjs-logo.png'}
          alt={'logo'}
          width={400}
          height={240}
        />
        <DemoApiSection />
      </MainLayout>
    </>
  );
};
