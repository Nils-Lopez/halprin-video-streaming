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
  setFav: (fav: boolean) => void;
  selectVideo?: (media: Media) => void;
};

export const VideoPlayer: FC<Props> = (props) => {
  const { video, lang, source, media, selectVideo, setFav } = props;
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [userToken, setUserToken] = useCookie('token', '0');
  const [mode, setMode] = useState('free');
  useEffect(() => {
    setFav(false);
    if (video && video.url && typeof video.url === 'string') {
      const additional =
        lang === 'fr' ? '?autoplay=1&texttrack=fr-BE' : '?autoplay=1';
      setUrl(
        'https://player.vimeo.com/video' +
          video.url.substring(17, 27) +
          additional
      );
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
        const checkFav = async () => {
          const res = await axios.get('/api/users/' + email);
          console.log('sent request : ', res);
          return res;
        };
        checkFav().then((res) => {
          if (res.data.favMedia.includes(video.media_slug)) {
            console.log('fav', video.media_slug, res.data.favMedia);
            setFav(true);
          }
        });
      }
    }
  }, [video]);

  const demoTimer = () => {
    setTimeout(() => {
      Router.push('/auth/signin');
    }, 100000);
  };

  //RESET TO 10000

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
              <button
                onClick={() => {
                  selectVideo(media[media.indexOf(video) - 1]);
                }}>
                <div className="arrow previous-arrow">
                  <div className="arrow-top"></div>
                  <div className="arrow-bottom"></div>
                </div>
              </button>
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
              <button
                onClick={() => {
                  console.log(media);
                  selectVideo(media[media.indexOf(video) + 1]);
                }}>
                <div className="arrow">
                  <div className="arrow-top"></div>
                  <div className="arrow-bottom"></div>
                </div>
              </button>
            </div>
          )}
        </>
      )}
    </S.Ctn>
  );
};
