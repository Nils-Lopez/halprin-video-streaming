import { useTranslation } from 'next-i18next';
import { MainLayout } from '@/components/layout/main-layout';
import * as S from './login-page.style';
import { loginConfig } from './login.config';
import { LoginForm } from '@/features/auth/components/login-form';

type Props = {
  children?: never;
};

export const LoginPage: React.FC<Props> = () => {
  const { t } = useTranslation(loginConfig.i18nNamespaces);

  return (
    <>
      <MainLayout>
        <S.Ctn>
          <h1>Login {t('app:page.title')}</h1>
          <LoginForm />
        </S.Ctn>
      </MainLayout>
    </>
  );
};
