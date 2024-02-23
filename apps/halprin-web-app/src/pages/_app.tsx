import type { AppProps as NextAppProps } from 'next/app';
import { AppProviders } from '../app-providers';
import { appWithTranslation } from 'next-i18next';

/**
 * Import global styles, global css or polyfills here
 * i.e.: import '@/assets/theme/style.scss'
 */
import 'tailwindcss/tailwind.css';

// Workaround for https://github.com/zeit/next.js/issues/8592

/**
 * @link https://nextjs.org/docs/advanced-features/custom-app
 */

// components/MetaTags.js
import Head from 'next/head';
import { useRouter } from 'next/router';

const MetaTags = () => {
  const { locale } = useRouter();
  const isFrench = locale === 'fr';

  return (
    <Head>
      <title>Anna Halprin - Dancing Life / Danser la vie</title>
      {isFrench ? (
        <>
          <meta
            name="keywords"
            content="Anna Halprin Dancing Life Danser la vie"
          />
          <meta
            name="description"
            content="Anna Halprin, Dancing Life / Danser la vie, cette publication interactive en ligne (web-app) vous invite à découvrir et explorer en profondeur l’œuvre et l’enseignement d’Anna Halprin..."
          />
          <meta
            property="og:title"
            content="Anna Halprin - Dancing Life / Danser la vie"
          />
          <meta
            property="og:description"
            content="Découvrez le travail d'Anna Halprin ! Un atelier intégral, des interviews et archives inédites vous présentent son parcours et les outils du Processus Art Vie."
          />
          <meta
            property="og:image"
            content="https://www.dancing-life.com/social/AH.jpg"
          />
          <meta property="og:url" content="https://www.dancing-life.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Danser la vie" />
          <meta name="twitter:image:alt" content="Danser la vie" />
        </>
      ) : (
        <>
          <meta
            name="keywords"
            content="Anna Halprin Dancing Life Danser la vie"
          />
          <meta
            name="description"
            content="Anna Halprin, Dancing Life / Danser la vie, this interactive online publication (web-app) invites you to discover and explore in depth the work and teaching of Anna Halprin..."
          />
          <meta
            property="og:title"
            content="Anna Halprin - Dancing Life / Danser la vie"
          />
          <meta
            property="og:description"
            content="Discover the work of Anna Halprin! A full workshop, interviews and precious archives introduce you to her career and the tools of the Life Art Process."
          />
          <meta
            property="og:image"
            content="https://www.dancing-life.com/social/AH.jpg"
          />
          <meta property="og:url" content="https://www.dancing-life.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Danser la vie" />
          <meta name="twitter:image:alt" content="Danser la vie" />
        </>
      )}
    </Head>
  );
};

const MyApp = ({
  Component,
  pageProps,
  err,
}: NextAppProps & { err?: Error }) => {
  const AnyComponent = Component as any;
  return (
    <AppProviders>
      <MetaTags />

      {/* Workaround for https://github.com/vercel/next.js/issues/8592 */}
      <AnyComponent {...pageProps} err={pageProps.err} />
    </AppProviders>
  );
};

/*
MyApp.getInitialProps = async appContext => {
   // calls page's `getInitialProps` and fills `appProps.pageProps`
   const appProps = await App.getInitialProps(appContext)
   return { ...appProps }
}
*/

export default appWithTranslation(MyApp);
