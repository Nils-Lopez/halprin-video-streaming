import { Media } from '@/data/data.types';
import { FC, useEffect, useState } from 'react';
import * as S from './video-player.style';
import axios from 'axios';
import useCookie from 'react-use-cookie';
import { LoginForm } from '../../auth/components/login-form';
import { SupportedLang } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CredModal } from '../../helpers/components/cred-modal';
import { Credit } from '@/data/data.types';
import { CreditsRepo } from '../repository/credits.repo';

import JWT from 'expo-jwt';

type Props = {
  video: Media;
  source: string;
  lang: SupportedLang;
};

export const VideoPlayer: FC<Props> = (props) => {
  const { video, lang, source } = props;
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [userToken, setUserToken] = useCookie('token', '0');
  const [mode, setMode] = useState('free');
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

  useEffect(() => {
    if (video && video.url && typeof video.url === 'string') {
      setUrl('https://player.vimeo.com/video' + video.url.substring(17, 28));
      if (mode === 'demo') {
        setMode('free');
      }
      if (!userToken || userToken === '0') {
        demoTimer();
      }
    }
  }, [video]);

  const addToFav = async () => {
    const email = JWT.decode(userToken, 'Halprin-Web-App').user;
    const res = await axios.put('/api/users', {
      email: email,
      playlist: 'fav',
      media: video.media_slug,
    });
    console.log(res);
  };

  const demoTimer = () => {
    setTimeout(() => {
      setMode('demo');
    }, 10000);
  };

  const creditsRepo = new CreditsRepo();

  const getCreditsData = () => {
    if (video && video.thumb !== 'false' && video.creditsIds) {
      const credits = creditsRepo.getMediaCredits(video.creditsIds);
      return credits;
    }
  };

  const creditsData: Credit[] | boolean | undefined =
    video && video.thumb !== 'false' ? getCreditsData() : false;

  useEffect(() => {
    if (video && video.thumb !== 'false') {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [video]);

  return (
    <S.Ctn>
      {mode === 'demo' ? (
        <>
          <div className="login-card">
            <LoginForm lang={lang} />
          </div>
        </>
      ) : (
        <>
          {userToken && userToken !== '0' ? (
            <div>
              <button className={'favBtn-' + source} onClick={() => addToFav()}>
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button
                className={'credBtn-' + source}
                onClick={() => {
                  if (creditsData && creditsData[0]) {
                    setCredModal(creditsData);
                  }
                }}>
                <FontAwesomeIcon icon={faCopyright} />
              </button>
            </div>
          ) : null}
          {!loading ? (
            <iframe
              src={url}
              title={Math.random().toString(36).substring(2, 9)}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay;"
              allowFullScreen></iframe>
          ) : null}
        </>
      )}
      {credModal[0].year !== 0 ? (
        <CredModal showModal={setCredModal} modal={credModal} lang={lang} />
      ) : null}
    </S.Ctn>
  );
};
