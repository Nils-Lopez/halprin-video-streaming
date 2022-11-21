import { MainLayout } from '@/components/layout/main-layout';
import { useTranslation } from 'next-i18next';
import { menuConfig } from './menu.config';
import * as S from './menu-page.style';
import { useState } from 'react';
import Link from 'next/link';
import { SupportedLang } from '../video/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp,
  faChevronDown,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

type Props = {
  lang: SupportedLang;
};

export const MenuPage: React.FC<Props> = (props) => {
  const { lang } = props;
  const { t } = useTranslation(menuConfig.i18nNamespaces);
  const [midTitle, setMidTitle] = useState('');
  const [midBody, setMidBody] = useState('');
  const [midContent, setMidContent] = useState('logo');
  const [midClassName, setMidClassName] = useState('');
  const [content, setContent] = useState('menu');
  const [intentionsToggle, setIntentionsToggle] = useState(false);

  const [infoWorkshop, setInfoWorkshop] = useState(false);
  const [infoRoadmaps, setInfoRoadmaps] = useState(false);
  const [infoLifeart, setInfoLifeart] = useState(false);
  const [infoIndex, setInfoIndex] = useState(false);

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
      {content === 'menu' ? (
        <MainLayout lang={lang} source={content} setContent={setContent}>
          <div>
            <S.Ctn>
              {!infoWorkshop && !infoRoadmaps && !infoIndex && !infoLifeart ? (
                <button
                  onClick={() =>
                    setContent(
                      'https://player.vimeo.com/video/582111408?autoplay=1'
                    )
                  }
                  className={'beginBtn-' + lang}>
                  {lang === 'en' ? 'BEGINNING' : 'POUR COMMENCER'}
                  <div className="icon">
                    <FontAwesomeIcon icon={faChevronDown} size={'2x'} fade />
                  </div>
                </button>
              ) : null}
              {midContent === 'logo' ? (
                <button
                  onClick={() =>
                    setContent(
                      'https://player.vimeo.com/video/584898888?autoplay=1'
                    )
                  }
                  className="logo">
                  <img
                    src={
                      '/images/ui/elements/triangle-halprin-hover-' +
                      lang +
                      '.png'
                    }
                    alt="Anna Halprin - Dancing Life"
                    className="triangle"
                    onMouseLeave={() => setIntentionsToggle(false)}
                  />
                </button>
              ) : null}
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
                    {midContent !== 'logo' ? (
                      <>
                        <div className={'linkDesc ' + midClassName}>
                          <p>{midTitle.toUpperCase()}</p>
                          <p>{midBody}</p>
                        </div>
                      </>
                    ) : null}
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

              {!infoWorkshop && !infoRoadmaps && !infoIndex && !infoLifeart ? (
                <button
                  onClick={() =>
                    setContent(
                      'https://player.vimeo.com/video/582147532?autoplay=1'
                    )
                  }
                  className={'endBtn-' + lang}>
                  <>
                    {lang === 'en' ? 'ENDING' : 'POUR TERMINER'}
                    <div className="icon">
                      <FontAwesomeIcon icon={faChevronUp} size={'2x'} fade />
                    </div>
                  </>
                </button>
              ) : null}
            </S.Ctn>

            {/* MOBILE VERSION */}

            <S.Mobile>
              {midContent === 'desc' && (
                <Link
                  href={
                    infoWorkshop
                      ? menuConfig.menuLinks.videoWorkshops
                      : infoRoadmaps
                      ? menuConfig.menuLinks.videoRoadmaps
                      : infoIndex
                      ? menuConfig.menuLinks.videoIndex
                      : menuConfig.menuLinks.videoLifeArt
                  }
                  passHref>
                  <div className="mobileDesc">
                    <div className={midClassName}>
                      <p>{midTitle.toUpperCase()}</p>
                      <p>{midBody}</p>
                    </div>
                  </div>
                </Link>
              )}
              {!infoWorkshop && !infoRoadmaps && !infoIndex && !infoLifeart ? (
                <>
                  <div className="top">
                    {' '}
                    <button
                      className="ctn"
                      onClick={() => {
                        setInfoWorkshop(true);
                        changeMiddleContent('workshop');
                      }}>
                      <img
                        src={'/images/ui/menu/round.png'}
                        alt={t('app:menu.workshop')}
                        onMouseEnter={() => changeMiddleContent('workshop')}
                        onMouseLeave={() => changeMiddleContent('logo')}
                        className="roundImg"
                      />
                      <div className="content workshop">
                        <h2 className="title">Workshop</h2>
                      </div>
                    </button>
                    <button
                      className="ctn lifeart"
                      onClick={() => {
                        setInfoLifeart(true);
                        changeMiddleContent('lifeart');
                      }}>
                      <img
                        src={'/images/ui/menu/eye.png'}
                        alt={t('app:menu.myLifeAndArt')}
                        onMouseEnter={() => changeMiddleContent('lifeart')}
                        onMouseLeave={() => changeMiddleContent('logo')}
                        className="eyeImg"
                      />
                      <div className="content ">
                        <h2 className="title">Life-Art</h2>
                      </div>
                    </button>
                  </div>
                  <div className="center">
                    <button
                      onClick={() =>
                        setContent(
                          'https://player.vimeo.com/video/584898888?autoplay=1'
                        )
                      }
                      className="logo">
                      <img
                        src={
                          '/images/ui/elements/triangle-halprin-hover-' +
                          lang +
                          '.png'
                        }
                        alt="Anna Halprin - Dancing Life"
                        className="triangle"
                        onMouseLeave={() => setIntentionsToggle(false)}
                      />
                    </button>
                  </div>
                  <div className="bottom">
                    <button
                      className="ctn index"
                      onClick={() => {
                        setInfoIndex(true);
                        changeMiddleContent('index');
                      }}>
                      <img
                        src={'/images/ui/menu/mouth.png'}
                        alt={t('app:menu.index')}
                        onMouseEnter={() => changeMiddleContent('index')}
                        onMouseLeave={() => changeMiddleContent('logo')}
                        className="mouthImg"
                      />
                      <div className="content">
                        <h2 className="title">Index</h2>
                      </div>
                    </button>
                    <button
                      className="ctn roadmaps"
                      onClick={() => {
                        setInfoRoadmaps(true);
                        changeMiddleContent('roadmaps');
                      }}>
                      <img
                        src={'/images/ui/menu/hand.png'}
                        alt={t('app:menu.roadmaps')}
                        onMouseEnter={() => changeMiddleContent('roadmaps')}
                        onMouseLeave={() => changeMiddleContent('logo')}
                        className="handImg"
                      />
                      <div className="content ">
                        <h2 className="title">Roadmaps</h2>
                      </div>
                    </button>
                  </div>
                </>
              ) : infoWorkshop ? (
                <>
                  <Link href={menuConfig.menuLinks.videoWorkshops} passHref>
                    <div className="ctn info pulse">
                      <img
                        src={'/images/ui/menu/round.png'}
                        alt={t('app:menu.workshop')}
                        onMouseEnter={() => changeMiddleContent('workshop')}
                        onMouseLeave={() => changeMiddleContent('logo')}
                        className="roundImg"
                      />
                      <div className="content workshop">
                        <h2 className="title">Workshop</h2>
                      </div>
                    </div>
                  </Link>
                  <div className="info-ctn">
                    <button
                      onClick={() => {
                        setInfoWorkshop(false);
                        changeMiddleContent('logo');
                      }}
                      className="btn-close-info">
                      <FontAwesomeIcon icon={faChevronUp} size="3x" />
                    </button>
                  </div>
                </>
              ) : infoRoadmaps ? (
                <>
                  <Link href={menuConfig.menuLinks.videoRoadmaps} passHref>
                    <div className="ctn roadmaps info pulse">
                      <img
                        src={'/images/ui/menu/hand.png'}
                        alt={t('app:menu.roadmaps')}
                        onMouseEnter={() => changeMiddleContent('roadmaps')}
                        onMouseLeave={() => changeMiddleContent('logo')}
                        className="handImg"
                      />
                      <div className="content ">
                        <h2 className="title">Roadmaps</h2>
                      </div>
                    </div>
                  </Link>
                  <div className="info-ctn">
                    <button
                      onClick={() => {
                        setInfoRoadmaps(false);
                        changeMiddleContent('logo');
                      }}
                      className="btn-close-info">
                      <FontAwesomeIcon icon={faChevronUp} size="3x" />
                    </button>
                  </div>
                </>
              ) : infoIndex ? (
                <>
                  <Link href={menuConfig.menuLinks.videoIndex} passHref>
                    <div className="ctn index info pulse">
                      <img
                        src={'/images/ui/menu/mouth.png'}
                        alt={t('app:menu.index')}
                        onMouseEnter={() => changeMiddleContent('index')}
                        onMouseLeave={() => changeMiddleContent('logo')}
                        className="mouthImg"
                      />
                      <div className="content">
                        <h2 className="title">Index</h2>
                      </div>
                    </div>
                  </Link>
                  <div className="info-ctn">
                    <button
                      onClick={() => {
                        setInfoIndex(false);
                        changeMiddleContent('logo');
                      }}
                      className="btn-close-info">
                      <FontAwesomeIcon icon={faChevronUp} size="3x" />
                    </button>
                  </div>{' '}
                </>
              ) : infoLifeart ? (
                <>
                  <Link href={menuConfig.menuLinks.videoLifeArt} passHref>
                    <div className="ctn lifeart info  pulse">
                      <img
                        src={'/images/ui/menu/eye.png'}
                        alt={t('app:menu.myLifeAndArt')}
                        onMouseEnter={() => changeMiddleContent('lifeart')}
                        onMouseLeave={() => changeMiddleContent('logo')}
                        className="eyeImg"
                      />
                      <div className="content ">
                        <h2 className="title">Life-Art</h2>
                        <p></p>
                      </div>
                    </div>
                  </Link>
                  <div className="info-ctn">
                    <button
                      onClick={() => {
                        setInfoLifeart(false);
                        changeMiddleContent('logo');
                      }}
                      className="btn-close-info">
                      <FontAwesomeIcon icon={faChevronUp} size="3x" />
                    </button>
                  </div>
                </>
              ) : null}
            </S.Mobile>
          </div>
        </MainLayout>
      ) : (
        <MainLayout lang={lang} source={content} setContent={setContent}>
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
              <button
                onClick={() => {
                  setContent('menu');
                }}>
                <div className="arrow">
                  <div className="arrow-top"></div>
                  <div className="arrow-bottom"></div>
                </div>
              </button>
            </div>
          </S.Video>
        </MainLayout>
      )}
    </>
  );
};
