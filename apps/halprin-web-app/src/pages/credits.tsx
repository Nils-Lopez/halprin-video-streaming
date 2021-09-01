import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BadRequest } from '@tsed/exceptions';
import {
  SiteConfigUtils,
  SupportedLocales,
} from '@/core/config/site- config.utils';
import { creditsConfig } from '@/features/credits/credits.config';
import { CreditsPage } from '@/features/credits/credits.page';

type Props = {
  locale: SupportedLocales;
};

export default function CreditsRoute(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { locale } = props;
  return <CreditsPage locale={locale} />;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { locale } = context;
  if (locale === undefined || !SiteConfigUtils.isSupportedLocale(locale)) {
    throw new BadRequest('locale is missing or not supported');
  }
  const { i18nNamespaces } = creditsConfig;
  return {
    props: {
      locale: locale,
      // @see https:/github.com/i18next/react-i18next/pull/1340#issuecomment-874728587
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};
