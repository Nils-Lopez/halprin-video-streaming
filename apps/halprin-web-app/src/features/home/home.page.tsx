import * as S from './home.page.style';

import { MainLayout } from '@/components/layout/main-layout';

import { useState, useEffect } from 'react';
import { SupportedLang } from '@/features/video/types';

import Link from 'next/link';

type Props = {
  children?: never;
  lang: SupportedLang;
};

export const HomePage: React.FC<Props> = ({ lang }) => {
  const [content, setContent] = useState('home');
  const [source, setSource] = useState('home');


  useEffect(() => {
    if (content === "home") {
      setSource(content)
    } else {
      setSource("intro")
    }
  }, [content])

  return (
    <>
      <MainLayout lang={lang} source={source}>
        <>
          {content === 'home' ? (
            <>
              <S.HomeLayout>
                <div>
                  <S.Ctn>
                    <button
                      onClick={() =>
                        setContent('https://player.vimeo.com/video/582151572?autoplay=1')
                      }>
                      <div className="centered logo">
                        <img
                          src={
                            '/images/ui/elements/triangle-halprin-' +
                            lang +
                            '.png'
                          }
                          alt="Anna Halprin - Dancing Life"
                          className="triangle"
                        />
                      </div>
                    </button>
                    <img src="/images/ui/home/desktop-anim.gif" className="gif" alt="tsb" />
                    <img src="/images/ui/home/mobile-anim.gif" className="mobile-gif" alt="tsb"/>
                    <div className="mid"></div>
                  </S.Ctn>
                  <S.Mobile>
                    <Link href="#" passHref>
                      <div className="ctn">
                        <img
                          src={'/images/ui/menu/round.png'}
                          alt="workshop"
                          className="roundImg"
                        />
                        <div className="content workshop">
                          <h2 className="title">Workshop</h2>
                        </div>
                      </div>
                    </Link>
                    <Link href="#" passHref>
                      <div className="ctn lifeart">
                        <img
                          src={'/images/ui/menu/eye.png'}
                          alt="lifeart"
                          className="eyeImg"
                        />
                        <div className="content ">
                          <h2 className="title">Life-Art</h2>
                        </div>
                      </div>
                    </Link>
                    <Link href="#" passHref>
                      <div className="ctn roadmaps">
                        <img
                          src={'/images/ui/menu/hand.png'}
                          alt="roadmaps"
                          className="handImg"
                        />
                        <div className="content ">
                          <h2 className="title">Roadmaps</h2>
                        </div>
                      </div>
                    </Link>
                    <Link href="#" passHref>
                      <div className="ctn index">
                        <img
                          src={'/images/ui/menu/mouth.png'}
                          alt="index"
                          className="mouthImg"
                        />
                        <div className="content">
                          <h2 className="title">Index</h2>
                        </div>
                      </div>
                    </Link>
                  </S.Mobile>
                </div>
              </S.HomeLayout>
            </>
          ) : (
            <>
                <S.Video>
                  <iframe
                    src={content}
                    className="video-player"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={
                      'https://player.vimeo.com/external/583334078.sd.mp4?s=685558fc99397ec030c0866c145927d29e602e30&profile_id=165'
                    }></iframe>
                  <div className="nextBtn">
                    {content !== 'https://player.vimeo.com/video/582111408?autoplay=1' ? (
                      <button
                        onClick={() => {
                          setContent(
                            'https://player.vimeo.com/video/582111408?autoplay=1'
                          );
                          setSource('tour')
                        }
                        }>
                        <div className="arrow">
                          <div className="arrow-top"></div>
                          <div className="arrow-bottom"></div>
                        </div>
                      </button>
                    ) : (
                      <Link href="/menu" passHref>
                        <div className="arrow">
                          <div className="arrow-top"></div>
                          <div className="arrow-bottom"></div>
                        </div>
                      </Link>
                    )}
                  </div>
                </S.Video>
            </>
          )}
        </>
      </MainLayout>
    </>
  );
};
