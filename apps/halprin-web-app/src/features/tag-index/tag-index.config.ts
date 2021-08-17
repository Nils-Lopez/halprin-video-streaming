import { I18nNamespaces } from '@/core/i18n/i18n-namespaces.type';

export type TagIndexConfig = {
  i18nNamespaces: Readonly<I18nNamespaces>;
};

export const tagIndexConfig: TagIndexConfig = {
  i18nNamespaces: ['common', 'app'],
} as const;
