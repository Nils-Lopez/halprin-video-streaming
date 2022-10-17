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
};

export const MainLayout: React.FC<Props> = (props) => {
  const { children, help, media, lang } = props;
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
      <div className="flex flex-col h-screen">
        <nav role="navigation">
          <div id="menuToggle">
            <input
              type="checkbox"
              onClick={() => {
                if (menu) {
                  setMenu(false);
                } else {
                  setMenu(true);
                }
              }}
            />
          
            

            <span></span>
            <span></span>
            <span></span>

            

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
                <li>{lang === 'en' ? "Editor's note" : "Note de l'éditeur"}</li>
              </Link>

              <Link href={'/' + lang + '/about'} passHref>
                <li>{lang === 'en' ? 'About' : 'A propos'}</li>
              </Link>
              <div className="auth">
                {session ? (
                  <Link href="#" passHref>
                    <button
                      onClick={() => {
                        setSession(false);
                        setCookie('token', '0');
                      }}>
                      <li className="logout">
                        {lang === 'en' ? 'Logout' : 'Déconnexion'}
                      </li>
                    </button>
                  </Link>
                ) : (
                  <>
                    <Link href="/auth/signin" passHref>
                      <li className="login">
                        {lang === 'en' ? 'Sign In' : 'Se connecter'}
                      </li>
                    </Link>
                    <Link href="https://contredanse.org" passHref>
                      <li className="buy">
                        {lang === 'en' ? 'Buy access' : "Acheter l'accès"}
                      </li>
                    </Link>
                    <br />
                    <div className="logoBtn">
                      <a href="https://contredanse.org/">
                        <img src="/images/ui/logo-contredanse-dark.png" alt="logo contredanse" className='logoInMenu'/>
                      </a>
                    </div>
                    <br /><br /><br /><br />


                  </>
                )}
              </div>
            </ul>
          </div>
          {menu ? (
            <>
              <div className="helpers">
                <Helpers help={help} media={media} lang={lang} />
              </div>
              <div className="logo-cd">
                <Link href="https://contredanse.org" passHref>
                  <img
                    src={'/images/ui/logo-contredanse-white.png'}
                    alt="LOGO CD"
                    className="lg"
                  />
                </Link>
              </div>
            </>
          ) : null}

          
        </nav>

        <main>{children}</main>
      </div>
    </Layout>
  );
};
