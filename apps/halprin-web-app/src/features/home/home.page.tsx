import { MainLayout } from '@/components/layout/main-layout';
import * as S from './home.page.style';
import { useState } from 'react';
import Link from 'next/link';
import { SupportedLang } from '../video/types';

type Props = {
  children?: never;
};

export const HomePage: React.FC<Props> = () => {
  const [lang, setLang] = useState<{ loading: boolean; lang: SupportedLang }>({
    loading: true,
    lang: 'en',
  });

  return (
    <>
      {lang.loading ? (
        <S.Ctn>
          <div className="langChoose">
            <div className="leftBtn">
              <button onClick={() => setLang({ loading: false, lang: 'en' })}>
                <img
                  src={'/images/ui/home/triangle-halprin-en.png'}
                  alt="Anna Halprin - Dancing Life"
                  className="triangle"
                />
              </button>
            </div>
            <div className="rightBtn">
              <button onClick={() => setLang({ loading: false, lang: 'fr' })}>
                <img
                  src="/images/ui/home/triangle-halprin-fr.png"
                  alt="Anna Halprin - Danser la vie"
                  className="triangle"
                />
              </button>
            </div>
          </div>
        </S.Ctn>
      ) : (
        <>
          <MainLayout lang={lang.lang}>
            <S.Video>
              <iframe
                src={'https://player.vimeo.com/video/582151572'}
                className="video-player"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={
                  'https://player.vimeo.com/external/583334078.sd.mp4?s=685558fc99397ec030c0866c145927d29e602e30&profile_id=165'
                }></iframe>
              <div className="nextBtn">
                <Link href={'/' + lang + '/menu'} passHref>
                  <div className="arrow">
                    <div className="arrow-top"></div>
                    <div className="arrow-bottom"></div>
                  </div>
                </Link>
              </div>
            </S.Video>
          </MainLayout>
        </>
      )}
    </>
  );
};
