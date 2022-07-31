import React, { useEffect, useState } from 'react';
import * as S from './login-form.style';
import axios from 'axios';
import { SupportedLang } from '../../video/types';
import useCookie from 'react-use-cookie';
import Router from 'next/router';

export type LoginFormProps = {
  forgotUrl?: string;
  getAccessUrl?: string;
  lang: SupportedLang;
  children?: never;
};

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { lang } = { ...props };
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [session, setSession] = useState(null);
  const [error, setError] = useState(false);
  const [userToken, setUserToken] = useCookie('token', '0');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value; // typechecks!
    const password = target.password.value; // typechecks!
    try {
      const res = await axios.post('/api/auth/login', {
        email: email,
        password: password,
      });
      if (res.data.token) {
        setSession(res.data.token);
        setError(false);
      } else {
        setError(true);
      }
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    if (session) {
      setUserToken(session, {
        days: 365,
        SameSite: 'Strict',
        Secure: true,
      });
    }
  }, [session]);

  useEffect(() => {
    if (userToken && userToken !== '0') {
      const redirect = '/' + lang + '/menu';
      Router.push(redirect);
    }
  }, [userToken]);

  return (
    <>
      {!session ? (
        <S.Container>
          <div className="header"></div>
          <br />
          <form onSubmit={handleSubmit} className="login-form">
            <div className="inputs">
              <div className="email">
                <label htmlFor="emailInput" className="email-label">
                  E-mail
                </label>
                <br />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                />
              </div>

              <div className="pwd">
                <label htmlFor="pwdInput" className="pwd-label">
                  {lang === 'en' ? 'Password' : 'Mot de passe'}
                </label>
                <br />
                <input
                  type="password"
                  name="password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  id="password"
                />
              </div>
            </div>
            {error ? (
              <div className="alert">
                {lang === 'en'
                  ? 'Wrong credentials.'
                  : 'Adresse email ou mot de passe incorrect.'}
              </div>
            ) : (
              <></>
            )}

            <div className="btn">
              <button type="submit" className="sending-btn">
                {lang === 'en' ? 'Sign In' : 'Connexion'}
              </button>
            </div>
          </form>
          <div className="footer">
            <h3>
              {lang === 'en'
                ? "Don't have acces to the app ?"
                : "Vous n'avez pas accès à l'application ?"}
            </h3>
            <br />
            <a href="https://contredanse.org">
              {lang === 'en' ? 'Buy it' : 'Acheter maintenant'}
            </a>
          </div>
        </S.Container>
      ) : (
        <>
          {lang === 'en' ? 'Successfully logged in !' : 'Connexion réussie !'}
        </>
      )}
    </>
  );
};
