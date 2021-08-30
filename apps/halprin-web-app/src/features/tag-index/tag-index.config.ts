import { I18nActiveNamespaces } from '@/core/i18n/i18n-namespaces.type';

export type TagIndexConfig = {
  i18nNamespaces: Readonly<I18nActiveNamespaces<'common' | 'app'>>;
};

export const tagIndexConfig: TagIndexConfig = {
  i18nNamespaces: ['common', 'app'],
} as const;
