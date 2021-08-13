import { I18nNamespaces } from '@/core/i18n/i18n-namespaces.type';

export type VideoConfig = {
  i18nNamespaces: Readonly<I18nNamespaces>;
};

export const videoConfig: VideoConfig = {
  /** Namespaces that should be loaded for this page */
  i18nNamespaces: ['common', 'app'],
} as const;
