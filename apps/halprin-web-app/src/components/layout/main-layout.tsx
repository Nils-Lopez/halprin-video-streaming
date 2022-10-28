import { Media } from '@/data/data.types';
import { Helpers } from '@/features/helpers/helpers';
import { SupportedLang } from '@/features/video/types';
import { Layout } from './main-layout.style';
import { getCookie, setCookie } from 'react-use-cookie';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Props = {
  help?: { title: string; content: string };
  media?: Media;
  children: JSX.Element;
  lang: SupportedLang;
  source?: string;
};

export const MainLayout: React.FC<Props> = (props) => {
  const { children, help, media, lang, source } = props;
  const [session, setSession] = useState<boolean | string>(false);
  const [menu, setMenu] = useState(false);

  const token = getCookie('token');

  useEffect(() => {
    if (token && token !== '0') {
      setSession(token);
    }
  }, [token]);

  return (
    <Layout>
      
      {menu ? (
        <button
          className="menu-background"
          onClick={() => setMenu(false)}></button>
      ) : null}
      <div className={!source || source !== 'statics' ? 'bg-blue' : 'bg-beige'}>
        <div className="flex flex-col h-screen">
          <nav role="navigation">
            <div id="menuToggle">
              <input
                type="checkbox"
                onChange={() => {
                  setMenu(!menu);
                }}
                checked={menu}
              />

              <span className="brgr"></span>
              <span className="brgr"></span>
              <span className="brgr"></span>

              <ul id="menu">
                <Link href={'/' + lang} passHref>
                  <li>{lang === 'en' ? 'Home' : 'Accueil'}</li>
                </Link>
                <Link href={'/' + lang + '/menu'} passHref>
                  <li>{lang === 'en' ? 'Content' : 'Contenu'}</li>
                </Link>
                <Link href={'/' + lang + '/bio'} passHref>
                  <li>{lang === 'en' ? 'Biography' : 'Biographie'}</li>
                </Link>

                <Link href={'/' + lang + '/credits'} passHref>
                  <li>{lang === 'en' ? 'Credits' : 'Crédits'}</li>
                </Link>
                <Link href={'/' + lang + '/editor'} passHref>
                  <li>
                    {lang === 'en' ? "Editor's note" : "Note de l'éditeur"}
                  </li>
                </Link>
                <Link href={'/' + lang + '/about'} passHref>
                  <li>{lang === 'en' ? 'About' : 'A propos'}</li>
                </Link>
                <div className={'auth ' + !session ? 'auth-login' : ''}>
                  {session ? (
                    <Link href="#" passHref>
                      <button
                        onClick={() => {
                          setSession(false);
                          setCookie('token', '0');
                        }}>
                        <li className={'logout-' + lang}>
                          <button className={'logout-btn ' + 'btn-' + lang}>
                            {lang === 'en' ? 'Logout' : 'Déconnexion'}
                          </button>
                        </li>
                      </button>
                    </Link>
                  ) : (
                    <div className="login">
                      <Link href="/auth/signin" passHref>
                        <li className="login">
                          <button className={'login-btn loginbtn-' + lang}>
                            {lang === 'en' ? 'Sign In' : 'Connexion'}
                          </button>
                        </li>
                      </Link>

                      <br />
                    </div>
                  )}
                </div>
              </ul>
            </div>
            {menu || (source && source === 'home') ? (
              <>
                <div className="helpers">
                  <Helpers help={help} media={media} lang={lang} source={source}/>
                </div>
                <div className={'logo-cd'}>
                  <Link href="https://contredanse.org" passHref>
                    {source && source === 'home' && !menu ? (
                      <img
                        src={'/images/ui/logo-contredanse-white.png'}
                        alt="LOGO CD"
                        className={'lg dark'}
                      />
                    ) : (
                      <img
                        src={'/images/ui/logo-contredanse-white.png'}
                        alt="LOGO CD"
                        className={'lg'}
                      />
                    )}
                  </Link>

                  {menu && <h3>© Contredanse Editions, 2022</h3>}
                </div>
              </>
            ) : null}
          </nav>

          <main>{children}</main>
        </div>
      </div>
    </Layout>
  );
};
