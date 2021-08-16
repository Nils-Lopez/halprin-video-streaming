import { GetServerSideProps } from 'next';
import { TagIndexPage } from '@/features/tag-index/tag-index.page';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BadRequest } from '@tsed/exceptions';
import { tagIndexConfig } from '@/features/tag-index/tag-index.config';

export default function TagIndexRoute() {
  return <TagIndexPage />;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  if (locale === undefined) {
    throw new BadRequest('locale is missing');
  }
  const { i18nNamespaces } = tagIndexConfig;
  return {
    props: {
      // @see https:/github.com/i18next/react-i18next/pull/1340#issuecomment-874728587
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};
