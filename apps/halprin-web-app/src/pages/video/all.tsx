import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { MainVideoPage } from '@/features/video/main-video-page';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BadRequest } from '@tsed/exceptions';
import { tagIndexConfig } from '@/features/tag-index/tag-index.config';
import { SupportedLang } from '@/features/video/types';
import { SiteConfigUtils } from '@/core/config/site- config.utils';

type Props = {
  lang: SupportedLang;
};

export default function AllRoute(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { lang } = props;
  return <MainVideoPage lang={lang} searchType={'all'} tagSlugs={['none']} />;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { locale } = context;
  if (locale === undefined || !SiteConfigUtils.isSupportedLocale(locale)) {
    throw new BadRequest('locale is missing or not supported');
  }

  const { i18nNamespaces } = tagIndexConfig;
  return {
    props: {
      lang: locale,
      // @see https:/github.com/i18next/react-i18next/pull/1340#issuecomment-874728587
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};
