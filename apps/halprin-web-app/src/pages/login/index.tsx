import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BadRequest } from '@tsed/exceptions';
import { loginConfig } from '@/features/auth/login.config';
import { LoginPage } from '@/features/auth/login-page';

type Props = {
  /** add what's needed in case */
};

export default function LoginRoute() {
  return <LoginPage />;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new BadRequest('locale is missing');
  }
  const { i18nNamespaces } = loginConfig;
  return {
    props: {
      // @see https:/github.com/i18next/react-i18next/pull/1340#issuecomment-874728587
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};
