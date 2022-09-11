import { GetServerSideProps } from 'next';
import { HomePage } from '@/features/home/home.page';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BadRequest } from '@tsed/exceptions';
import { homeConfig } from '@/features/home/home.config';
import { SiteConfigUtils } from '@/core/config/site- config.utils';

type Props = {
  // add props needed if any
};

export default function HomeRoute() {
  return <HomePage />;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { locale } = context;
  if (locale === undefined || !SiteConfigUtils.isSupportedLocale(locale)) {
    throw new BadRequest('locale is missing or not supported');
  }
  const { i18nNamespaces } = homeConfig;
  return {
    props: {
      // @see https:/github.com/i18next/react-i18next/pull/1340#issuecomment-874728587
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};
