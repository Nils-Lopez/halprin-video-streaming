import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { LoginPage } from '@/features/auth/login-page';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BadRequest } from '@tsed/exceptions';
import { loginConfig } from '@/features/auth/login.config';
import { SupportedLang } from '@/features/video/types';
import { SiteConfigUtils } from '@/core/config/site- config.utils';

type Props = {
  lang: SupportedLang;
};

export default function LoginRoute(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { lang } = props;
  return <LoginPage lang={lang} />;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { locale } = context;
  if (locale === undefined || !SiteConfigUtils.isSupportedLocale(locale)) {
    throw new BadRequest('locale is missing or not supported');
  }

  const { i18nNamespaces } = loginConfig;
  return {
    props: {
      lang: locale,
      // @see https:/github.com/i18next/react-i18next/pull/1340#issuecomment-874728587
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};
