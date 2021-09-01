import { MainLayout } from '@/components/layout/main-layout';
import * as S from './credits.page.style';

import { useTranslation } from 'next-i18next';
import { creditsConfig } from '@/features/credits/credits.config';
import { CreditsRepo } from '@/features/credits/repository/credits.repo';
import { SupportedLocales } from '@/core/config/site- config.utils';

type Props = {
  locale: SupportedLocales;
  fallbackLocale?: SupportedLocales;
  children?: never;
};

const defaultProps = {
  fallbackLocale: 'en',
};

const creditRepo = new CreditsRepo();
const credits = creditRepo.getCredits();

export const CreditsPage: React.FC<Props> = (props) => {
  const { locale, fallbackLocale } = { ...defaultProps, ...props };

  // When you use 't' you can remove the eslin disable
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(creditsConfig.i18nNamespaces);

  return (
    <>
      <MainLayout>
        <S.Ctn>
          <h1>Credits</h1>
          <span>Todo list the credits</span>
          <div>
            {credits.map((credit) => {
              const htmlLabel =
                credit.htmlLabel[locale] ??
                credit.htmlLabel[fallbackLocale as SupportedLocales];
              return (
                <div
                  dangerouslySetInnerHTML={{
                    __html: htmlLabel,
                  }}
                />
              );
            })}
          </div>
        </S.Ctn>
      </MainLayout>
    </>
  );
};
