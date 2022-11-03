import * as S from './helpers.style';
import { useState } from 'react';
import { HelpModal } from './components/help-modal';
import { Media } from '@/data/data.types';
import { SupportedLang } from '../video/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import Router from 'next/router';
import { useRouter } from 'next/router';

type Props = {
  help?: { title: string; content: string };
  media?: Media;
  lang: SupportedLang;
  source?: string;
  categorySlug?: string;
};

export const Helpers: React.FC<Props> = (props) => {
  const { help, lang = 'en', source, categorySlug } = props;

  const [helpModal, setHelpModal] = useState('');
  const router = useRouter();

  const helpSrc =
    router.pathname === '/menu'
      ? 'menu'
      : router.pathname === '/' && source
      ? source
      : router.pathname === '/tag-index'
      ? 'index'
      : 'video';

  return (
    <S.TopBar>
      <div className="right">
        {router.pathname !== '/bio' &&
        router.pathname !== '/about' &&
        router.pathname !== '/credits' &&
        router.pathname !== '/editor' &&
        (!source || source !== 'home') ? (
          <span
            className={'dot'}
            onKeyDown={() => console.log('tsb')}
            role="button"
            tabIndex={0}
            onClick={() => setHelpModal(helpSrc)}>
            <FontAwesomeIcon icon={faCircleQuestion} />
          </span>
        ) : null}
        <span className="dot">
          <button
            onClick={() => {
              const newLang = lang === 'en' ? 'fr' : 'en';
              // Router.push('/' + newLang + router.pathname);
              let path = '/' + newLang;
              if (router.pathname.includes('[') && categorySlug) {
                const name = router.pathname.split('[')[0];
                path = path + name + categorySlug;
              } else {
                path = path + router.pathname;
              }
              if (path.includes('/fr/en') || path.includes('/en/fr')) {
                console.log('=================');
                console.log('c bon frr');
                console.log('=================');
              }
              Router.push(path);
            }}>
            {lang === 'en' ? 'Français' : 'English'}
          </button>
        </span>
      </div>
      {helpModal !== '' ? (
        <HelpModal showModal={setHelpModal} modal={helpModal} lang={lang} />
      ) : null}
    </S.TopBar>
  );
};
