import * as S from './helpers.style';
import Link from 'next/link';
import { useState } from 'react';
import { HelpModal } from './components/help-modal';
import { CredModal } from './components/cred-modal';
import { Credit, Media } from '@/data/data.types';
import { CreditsRepo } from '../video/repository/credits.repo';
import { SupportedLang } from '../video/types';

type Props = {
  help?: { title: string; content: string };
  media?: Media;
  lang: SupportedLang;
};

export const Helpers: React.FC<Props> = (props) => {
  const { help, lang = 'en', media } = props;

  const [helpBtn, setHelpBtn] = useState('small');
  const [credBtn, setCredBtn] = useState('small');
  const [helpModal, setHelpModal] = useState({
    title: 'false',
    content: 'false',
  });
  const [credModal, setCredModal] = useState<Credit[]>([
    {
      htmlLabel: {
        en: '<b><i>Dance with Life. Anna, a Living Legend</i></…tp://www.annahalprin.org">www.annahalprin.org</a>',
        fr: '<b><i>Dance with Life. Anna, a Living Legend</i></…tp://www.annahalprin.org">www.annahalprin.org</a>',
      },
      id: 11,
      index: true,
      year: 0,
    },
  ]);

  const modalContent = help
    ? help
    : {
        title: 'Help Template',
        content: "You're on the template of our helping modal",
      };

  const creditsRepo = new CreditsRepo();

  const getCreditsData = () => {
    if (media && media.thumb !== 'false' && media.creditsIds) {
      const credits = creditsRepo.getMediaCredits(media.creditsIds);
      return credits;
    }
  };

  const creditsData: Credit[] | boolean | undefined =
    media && media.thumb !== 'false' ? getCreditsData() : false;

  return (
    <S.TopBar>
      <div className="right">
        {media && media.thumb !== 'false' ? (
          <span
            className={'cred dot ' + credBtn}
            onMouseEnter={() => {
              setCredBtn('large');
            }}
            tabIndex={0}
            onMouseLeave={() => setCredBtn('small')}
            onKeyDown={() => console.log('tsb')}
            role="button"
            onClick={() => {
              if (creditsData && creditsData[0]) {
                setCredModal(creditsData);
              }
            }}>
            {credBtn === 'large' ? <strong>c</strong> : null}
          </span>
        ) : null}
        <span
          className={'dot ' + helpBtn}
          onMouseEnter={() => {
            setHelpBtn('large');
          }}
          onKeyDown={() => console.log('tsb')}
          role="button"
          tabIndex={0}
          onMouseLeave={() => setHelpBtn('small')}
          onClick={() => setHelpModal(modalContent)}>
          {helpBtn === 'large' ? <strong>?</strong> : null}
        </span>
      </div>
      {helpModal.title !== 'false' ? (
        <HelpModal showModal={setHelpModal} modal={helpModal} lang={lang} />
      ) : null}
      {credModal[0].year !== 0 ? (
        <CredModal showModal={setCredModal} modal={credModal} lang={lang} />
      ) : null}
    </S.TopBar>
  );
};
