import { GetServerSideProps } from 'next';
import { HomePage } from '../features/home/home.page';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BadRequest } from '@tsed/exceptions';
import { homeConfig } from '../features/home/home.config';

export default function HomeRoute() {
  return <HomePage />;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  if (locale === undefined) {
    throw new BadRequest('locale is missing');
  }
  const { i18nNamespaces } = homeConfig;
  return {
    props: {
      // @see https:/github.com/i18next/react-i18next/pull/1340#issuecomment-874728587
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};
