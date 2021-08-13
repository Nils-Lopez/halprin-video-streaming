import { siteConfig, SiteConfig } from '@/config/site.config';

export type SupportedLocales = SiteConfig['supportedLocales'][number];

export class SiteConfigUtils {
  static isSupportedLocale = (locale: string): locale is SupportedLocales => {
    return siteConfig.supportedLocales.includes(
      locale as unknown as SupportedLocales
    );
  };
}
