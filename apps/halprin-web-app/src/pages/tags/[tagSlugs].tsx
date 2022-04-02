import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BadRequest } from '@tsed/exceptions';
import { videoConfig } from '@/features/video/video.config';
import { SupportedLang } from '@/features/video/types';
import { SiteConfigUtils } from '@/core/config/site- config.utils';
import { Asserts } from '@contredanse/common';
import { MainVideoPage } from '@/features/video/main-video-page';

type Props = {
  tagSlugs: string[];
  lang: SupportedLang;
};

export default function TagsRoute(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { lang, tagSlugs } = props;
  return <MainVideoPage lang={lang} tagSlugs={tagSlugs} searchType={'tag'} />;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { locale } = context;
  if (locale === undefined || !SiteConfigUtils.isSupportedLocale(locale)) {
    throw new BadRequest('locale is missing or not supported');
  }
  const { tagSlugs } = context.params ?? {};

  Asserts.nonEmptyString(tagSlugs, () => {
    throw new BadRequest('tagSlugs must be a non empty string');
  });

  const slugs = tagSlugs.split(':').filter((tag) => tag.trim() !== '');

  const { i18nNamespaces } = videoConfig;
  return {
    props: {
      tagSlugs: slugs,
      lang: locale,
      // @see https:/github.com/i18next/react-i18next/pull/1340#issuecomment-874728587
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};
