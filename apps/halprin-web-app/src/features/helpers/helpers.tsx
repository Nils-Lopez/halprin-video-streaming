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
};

export const Helpers: React.FC<Props> = (props) => {
  const { help, lang = 'en' } = props;

  const [helpModal, setHelpModal] = useState('');
  const router = useRouter();

  const helpSrc =
    router.pathname === '/menu'
      ? 'menu'
      : router.pathname === '/home'
      ? 'intro'
      : router.pathname === '/tag-index'
      ? 'index'
      : 'video';

  return (
    <S.TopBar>
      <div className="right">
        {router.pathname !== '/bio' &&
        router.pathname !== '/about' &&
        router.pathname !== '/credits' &&
        router.pathname !== '/editors' ? (
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
              Router.push('/' + newLang + router.pathname);
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
