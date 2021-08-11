import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BadRequest } from '@tsed/exceptions';
import { MainVideoPage } from '@/features/video/main-video-page';
import { videoConfig } from '@/features/video/video.config';
import { SupportedLang } from '@/features/video/types';

type Props = { lang: SupportedLang };

export default function VideoRoute(props: Props) {
  const { lang } = props;
  return <MainVideoPage lang={lang} />;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  if (locale === undefined) {
    throw new BadRequest('locale is missing');
  }
  const { i18nNamespaces } = videoConfig;
  return {
    props: {
      lang: locale,
      // @see https:/github.com/i18next/react-i18next/pull/1340#issuecomment-874728587
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};
