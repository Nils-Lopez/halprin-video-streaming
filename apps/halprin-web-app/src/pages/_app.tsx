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
const MyApp = ({
  Component,
  pageProps,
  err,
}: NextAppProps & { err?: Error }) => {
  const AnyComponent = Component as any;
  return (
    <AppProviders>
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
