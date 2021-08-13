export const siteConfig = {
  supportedLocales: ['en', 'fr'],
  features: {
    login: {
      urls: {
        // @todo make it real
        getAccess: 'https://www.contredanse.org',
        emailForgotten: 'https://www.contredanse.org',
      },
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
