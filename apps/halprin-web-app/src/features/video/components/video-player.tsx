import { Media } from '@/data/data.types';
import { FC, useEffect, useState } from 'react';
import * as S from './video-player.style';
import axios from 'axios';
import useCookie from 'react-use-cookie';
import { LoginForm } from '../../auth/components/login-form';
import { SupportedLang } from '../types';
import Router from 'next/router';
import Link from 'next/link';

import JWT from 'expo-jwt';

type Props = {
  video: Media;
  source: string;
  lang: SupportedLang;
  media?: Media[];
  selectVideo?: (media: Media) => void;
};

export const VideoPlayer: FC<Props> = (props) => {
  const { video, lang, source, media, selectVideo } = props;
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [userToken, setUserToken] = useCookie('token', '0');
  const [mode, setMode] = useState('free');

  useEffect(() => {
    if (video && video.url && typeof video.url === 'string') {
      setUrl('https://player.vimeo.com/video' + video.url.substring(17, 28));
      if (mode === 'demo') {
        setMode('free');
      }
      if (!userToken || userToken === '0') {
        demoTimer();
      } else {
        // Add seens videos to user model
        console.log('adding vidoe to watched');
        const email = JWT.decode(userToken, 'Halprin-Web-App').user;
        const addToSeens = async () => {
          const res = await axios.put('/api/users', {
            email: email,
            playlist: 'seen',
            media: video.media_slug,
          });
          console.log('sended request : ', res);
          return res;
        };
        addToSeens();
      }
    }
  }, [video]);

  const demoTimer = () => {
    setTimeout(() => {
      Router.push('/auth/signin');
    }, 10000);
  };

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
          {media && selectVideo && media.indexOf(video) > 0 && (
            <div className="previousBtn">
              <Link
                href={'#' + media[media.indexOf(video) - 1].media_slug}
                passHref>
                <button
                  onClick={() => {
                    selectVideo(media[media.indexOf(video) - 1]);
                  }}>
                  <img
                    src="/images/ui/elements/left-arrow-halprin.png"
                    alt="<"
                    className="arrow dir-left"
                  />
                </button>
              </Link>
            </div>
          )}
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

          {media && selectVideo && media.indexOf(video) < media.length - 1 && (
            <div className="nextBtn">
              <Link
                href={'#' + media[media.indexOf(video) + 1].media_slug}
                passHref>
                <button
                  onClick={() => {
                    selectVideo(media[media.indexOf(video) + 1]);
                  }}>
                  <img
                    src="/images/ui/elements/right-arrow-halprin.png"
                    alt=">"
                    className="arrow dir-right"
                  />
                </button>
              </Link>
            </div>
          )}
        </>
      )}
    </S.Ctn>
  );
};
