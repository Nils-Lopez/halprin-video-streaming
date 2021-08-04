import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { loginConfig } from '@/features/auth/login.config';

type FormValues = {
  email: string;
  password: string;
};

export type LoginFormProps = {
  forgotUrl?: string;
  getAccessUrl?: string;
  children?: never;
};

const defaultProps = {
  forgotUrl: loginConfig.urls.emailForgotten,
  getAccessUrl: loginConfig.urls.getAccess,
};

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { forgotUrl, getAccessUrl } = { ...defaultProps, ...props };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const { t } = useTranslation(loginConfig.i18nNamespaces);

  const onSubmit = (data: FormValues) => alert(JSON.stringify(data));

  return (
    <div className="w-full max-w-sm">
      <h1>{t('common:welcome')}</h1>
      <h2>{t('app:loginForm.h2Message')}</h2>
      <Image
        src={'/shared-assets/images/logo-contredanse-white.jpg'}
        alt={'Contredanse'}
        width={300}
        height={300}
      />
      <p>
        <a href={getAccessUrl} target="_blank" rel={'noopener noreferrer'}>
          {t('app:loginForm.getYourAccess')}
        </a>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email">
            {t('common:auth.email')}
          </label>
          <input
            {...register('email', {
              required: true,
              maxLength: 40,
              pattern: /^S+@S+$/,
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder={t('common:placeholder.email')}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">Must be a valid email</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password">
            {t('common:auth.password', {
              required: true,
              maxLength: 40,
            })}
          </label>
          <input
            {...register('password')}
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder={t('common:placeholder.password')}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">Password is required</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button">
            {t('app:loginForm.connectBtn')}
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href={forgotUrl}
            target="_blank"
            rel="noopener noreferrer">
            {t('app:loginForm.forgottenPasswordQuestion')}
          </a>
        </div>
      </form>
    </div>
  );
};
