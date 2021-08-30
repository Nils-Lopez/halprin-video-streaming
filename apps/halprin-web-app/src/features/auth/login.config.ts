import { siteConfig } from '@/config/site.config';
import { I18nActiveNamespaces } from '@/core/i18n/i18n-namespaces.type';

export type LoginConfig = {
  i18nNamespaces: Readonly<I18nActiveNamespaces<'common' | 'app'>>;
  urls: {
    getAccess: string;
    emailForgotten: string;
  };
};

export const loginConfig: LoginConfig = {
  /** Namespaces that should be loaded for this page */
  i18nNamespaces: ['common', 'app'],
  urls: siteConfig.features.login.urls,
} as const;
