import * as S from './helpers.style';
import { useEffect, useState } from 'react';
import { HelpModal } from './components/help-modal';
import { Media } from '@/data/data.types';
import { SupportedLang } from '../video/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import Router from 'next/router';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

type Props = {
  help?: { title: string; content: string };
  media?: Media;
  lang: SupportedLang;
  source?: string;
  categorySlug?: string;
  setContent?: (content: string) => void;
};

export const Helpers: React.FC<Props> = (props) => {
  const { help, lang = 'en', source, categorySlug, setContent } = props;

  const [helpModal, setHelpModal] = useState('');
  const router = useRouter();
  const { i18n } = useTranslation();

  let helpSrc =
    router.pathname === '/menu' && source
      ? 'menu'
      : router.pathname === '/menu'
        ? 'menu'
        : router.pathname === '/' && source
          ? source
          : router.pathname === '/tag-index'
            ? 'index'
            : 'video';

  if (helpSrc === 'menu') {
    helpSrc =
      source === 'menu'
        ? 'menu'
        : source === 'https://player.vimeo.com/video/582111408?autoplay=1'
          ? 'begin'
          : source === 'https://player.vimeo.com/video/584898888?autoplay=1'
            ? 'tour'
            : 'ending';
  }

  

  const { pathname, asPath, query } = router;

  const handleLanguageChange = (langValue: string) => {
    router.push({ pathname, query }, asPath, { locale: langValue });
  };

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
              handleLanguageChange(lang === 'en' ? 'fr' : 'en');
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
