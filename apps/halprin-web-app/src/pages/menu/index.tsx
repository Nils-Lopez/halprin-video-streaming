import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { MenuPage } from '@/features/menu/menu.page';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BadRequest } from '@tsed/exceptions';
import { menuConfig } from '@/features/menu/menu.config';
import { SiteConfigUtils } from '@/core/config/site- config.utils';
import { SupportedLang } from '@/features/video/types';

type Props = {
  lang: SupportedLang;
};

export default function MenuRoute(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { lang } = props;
  return <MenuPage lang={lang} />;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { locale } = context;
  if (locale === undefined || !SiteConfigUtils.isSupportedLocale(locale)) {
    throw new BadRequest('locale is missing or not supported');
  }
  const { i18nNamespaces } = menuConfig;
  return {
    props: {
      lang: locale,
      // @see https:/github.com/i18next/react-i18next/pull/1340#issuecomment-874728587
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};
