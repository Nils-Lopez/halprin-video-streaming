import { I18nActiveNamespaces } from '@/core/i18n/i18n-namespaces.type';

export type CreditsConfig = {
  i18nNamespaces: Readonly<I18nActiveNamespaces<'common' | 'app'>>;
};

export const creditsConfig: CreditsConfig = {
  /** Namespaces that should be loaded for this page */
  i18nNamespaces: ['common', 'app'],
} as const;
