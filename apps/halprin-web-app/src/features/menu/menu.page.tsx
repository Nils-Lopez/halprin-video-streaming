import { MainLayout } from '@/components/layout/main-layout';
import { useTranslation } from 'next-i18next';
import { menuConfig } from './menu.config';
import * as S from './menu-page.style';
import { useState } from 'react';
import Link from 'next/link';

type Props = {
  lang: string;
};

export const MenuPage: React.FC<Props> = (props) => {
  const { lang } = props;
  const { t } = useTranslation(menuConfig.i18nNamespaces);
  const [midTitle, setMidTitle] = useState('');
  const [midBody, setMidBody] = useState('');
  const [midContent, setMidContent] = useState('logo');
  const [midClassName, setMidClassName] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  console.log(lang);

  const changeMiddleContent = (type: string) => {
    switch (type) {
      case 'workshop': {
        setMidContent('desc');
        setMidClassName('workshopTxt');
        setMidTitle(t('app:menu.workshop'));
        setMidBody(t('app:menu.workshopDesc'));
        break;
      }
      case 'lifeart': {
        setMidTitle(t('app:menu.myLifeAndArt'));
        setMidBody(t('app:menu.myLifeAndArtDesc'));
        setMidContent('desc');
        setMidClassName('lifeartTxt');
        break;
      }
      case 'roadmaps': {
        setMidTitle(t('app:menu.roadmaps'));
        setMidBody(t('app:menu.roadmapsDesc'));
        setMidContent('desc');
        setMidClassName('roadmapsTxt');
        break;
      }
      case 'index': {
        setMidTitle(t('app:menu.index'));
        setMidBody(t('app:menu.indexDesc'));
        setMidContent('desc');
        setMidClassName('indexTxt');
        break;
      }
      default: {
        setMidContent('logo');
        setMidClassName('logo');
        break;
      }
    }
  };

  return (
    <>
      {!showMenu ? (
        <MainLayout>
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
            <div className="nextBtn">
              <button onClick={() => setShowMenu(true)}>
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
                  className="arrow">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </S.Video>
        </MainLayout>
      ) : (
        <MainLayout>
          <S.Ctn>
            <S.Circle>
              <div className="topIcon">
                <Link href={menuConfig.menuLinks.videoWorkshops} passHref>
                  <img
                    src={'/images/ui/menu/round.png'}
                    alt={t('app:menu.workshop')}
                    onMouseEnter={() => changeMiddleContent('workshop')}
                    onMouseLeave={() => changeMiddleContent('logo')}
                    className="roundImg"
                  />
                </Link>
              </div>
              <div className="midContainer">
                <div className="leftIcon">
                  <Link href={menuConfig.menuLinks.videoLifeArt} passHref>
                    <img
                      src={'/images/ui/menu/eye.png'}
                      alt={t('app:menu.myLifeAndArt')}
                      onMouseEnter={() => changeMiddleContent('lifeart')}
                      onMouseLeave={() => changeMiddleContent('logo')}
                      className="eyeImg"
                    />
                  </Link>
                </div>
                <div className="centered">
                  {midContent === 'logo' ? (
                    <>
                      <div className="logo">
                        <img
                          src={
                            '/images/ui/menu/triangle-halprin-white-' +
                            'en' +
                            '.png'
                          }
                          alt="Anna Halprin - Dancing Life"
                          className="triangle"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={'linkDesc ' + midClassName}>
                        <p>{midTitle.toUpperCase()}</p>
                        <p>{midBody}</p>
                      </div>
                    </>
                  )}
                </div>
                <div className="rightIcon">
                  <Link href={menuConfig.menuLinks.videoRoadmaps} passHref>
                    <img
                      src={'/images/ui/menu/hand.png'}
                      alt={t('app:menu.roadmaps')}
                      onMouseEnter={() => changeMiddleContent('roadmaps')}
                      onMouseLeave={() => changeMiddleContent('logo')}
                      className="handImg"
                    />
                  </Link>
                </div>
              </div>
              <div className="bottomIcon">
                <Link href={menuConfig.menuLinks.videoIndex} passHref>
                  <img
                    src={'/images/ui/menu/mouth.png'}
                    alt={t('app:menu.index')}
                    onMouseEnter={() => changeMiddleContent('index')}
                    onMouseLeave={() => changeMiddleContent('logo')}
                    className="mouthImg"
                  />
                </Link>
              </div>
            </S.Circle>
            {midContent === 'desc' && (
              <div className="mobileDesc">
                <div className={midClassName}>
                  <p>{midTitle.toUpperCase()}</p>
                  <p>{midBody}</p>
                </div>
              </div>
            )}
          </S.Ctn>
        </MainLayout>
      )}
    </>
  );
};
