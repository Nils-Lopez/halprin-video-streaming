import { MainLayout } from '@/components/layout/main-layout';
import { useTranslation } from 'next-i18next';
import { homeConfig } from './home.config';
import * as S from './home.page.style';
import { useState } from 'react';
import Link from 'next/link';

type Props = {
  children?: never;
};

export const HomePage: React.FC<Props> = () => {
  const { t } = useTranslation(homeConfig.i18nNamespaces);
  const [lang, setLang] = useState('');

  return (
    <>
      {lang === '' ? (
        <S.Ctn>
          <div className="langChoose">
            <div className="leftBtn">
              <button onClick={() => setLang('en')}>
                <div className="triangleContent">
                  Anna Halprin
                  <br />
                  <hr />
                  Dancing Life
                </div>
                <div className="backgroundTriangle">
                  <img
                    className="triangle"
                    src="/images/ui/home/triangle-halprin.png"
                    alt="regular triangle line png @transparentpng.com"
                  />
                </div>
              </button>
            </div>
            <div className="rightBtn">
              <button onClick={() => setLang('fr')}>
                <div className="triangleContent">
                  Anna Halprin
                  <br />
                  <hr />
                  Danser la vie
                </div>
                <div className="backgroundTriangle">
                  <img
                    className="triangle"
                    src="/images/ui/home/triangle-halprin.png"
                    alt="regular triangle line png @transparentpng.com"
                  />
                </div>
              </button>
            </div>
          </div>
        </S.Ctn>
      ) : (
        <>
          <MainLayout>
            <S.SkipLink>
              <Link href={'/' + lang + '/menu'} passHref>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="skipLink">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </S.SkipLink>
            <S.Video>
              <iframe
                src={
                  'https://player.vimeo.com/external/583334078.sd.mp4?s=685558fc99397ec030c0866c145927d29e602e30&profile_id=165'
                }
                className="video-player"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={
                  'https://player.vimeo.com/external/583334078.sd.mp4?s=685558fc99397ec030c0866c145927d29e602e30&profile_id=165'
                }></iframe>
            </S.Video>
          </MainLayout>
        </>
      )}
    </>
  );
};
