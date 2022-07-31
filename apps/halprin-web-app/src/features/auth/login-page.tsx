import { MainLayout } from '@/components/layout/main-layout';
import * as S from './login-page.style';
import { LoginForm } from '@/features/auth/components/login-form';
import { SupportedLang } from '../video/types';

type Props = {
  lang: SupportedLang;
  children?: never;
};

export const LoginPage: React.FC<Props> = (props) => {
  const { lang } = props;
  return (
    <>
      <MainLayout lang={lang}>
        <S.Ctn>
          <LoginForm lang={lang} />
        </S.Ctn>
      </MainLayout>
    </>
  );
};
