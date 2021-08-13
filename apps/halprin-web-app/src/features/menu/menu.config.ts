import { I18nNamespaces } from '@/core/i18n/i18n-namespaces.type';

export type MenuConfig = {
  i18nNamespaces: Readonly<I18nNamespaces>;
};

export const menuConfig: MenuConfig = {
  i18nNamespaces: ['common', 'app'],
} as const;
