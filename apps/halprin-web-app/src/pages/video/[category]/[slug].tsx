import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BadRequest } from '@tsed/exceptions';
import { MainVideoPage } from '@/features/video/main-video-page';
import { videoConfig } from '@/features/video/video.config';
import { SupportedLang } from '@/features/video/types';
import { SiteConfigUtils } from '@/core/config/site- config.utils';
import { Asserts } from '@contredanse/common';
import { MediaCategRepo } from '@/features/video/repository/media-categ.repo';
import { MediaCategorySlug } from '@/data/data.types';

type Props = {
  categorySlug: MediaCategorySlug;
  lang: SupportedLang;
};

export default function VideoRoute(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { lang, categorySlug } = props;
  return (
    <MainVideoPage
      lang={lang}
      categorySlug={categorySlug}
      searchType={'category'}
      tagSlugs={['none']}
    />
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { locale } = context;
  if (locale === undefined || !SiteConfigUtils.isSupportedLocale(locale)) {
    throw new BadRequest('locale is missing or not supported');
  }
  const { slug: categorySlug } = context.params ?? {};
  Asserts.nonEmptyString(categorySlug, () => {
    throw new BadRequest('categorySlug must be a non empty string');
  });
  if (!new MediaCategRepo().exists(categorySlug)) {
    return {
      notFound: true,
    };
  }
  const { i18nNamespaces } = videoConfig;
  return {
    props: {
      categorySlug: categorySlug,
      lang: locale,
      // @see https:/github.com/i18next/react-i18next/pull/1340#issuecomment-874728587
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};
