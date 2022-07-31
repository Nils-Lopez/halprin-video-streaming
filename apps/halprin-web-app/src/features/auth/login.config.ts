import { I18nActiveNamespaces } from '@/core/i18n/i18n-namespaces.type';

export type LoginConfig = {
  i18nNamespaces: Readonly<I18nActiveNamespaces<'common' | 'app'>>;
};

export const loginConfig: LoginConfig = {
  i18nNamespaces: ['common', 'app'],
} as const;
