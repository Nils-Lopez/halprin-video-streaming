import { MainLayout } from '@/components/layout/main-layout';
import { useTranslation } from 'next-i18next';
import { menuConfig } from './menu.config';
import * as S from './menu-page.style';
import { useState, Fragment, FC } from 'react';
import Link from 'next/link';

type Props = {
  children?: never;
};

export const MenuPage: React.FC<Props> = () => {
  const { t } = useTranslation(menuConfig.i18nNamespaces);
  const [midTitle, setMidTitle] = useState('');
  const [midBody, setMidBody] = useState('');
  const [midContent, setMidContent] = useState('logo');
  const [midClassName, setMidClassName] = useState('');
  const [hoverCenter, setHoverCenter] = useState(false);

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
              <div className="circleContent">
                <div className={midClassName}>
                  {midContent === 'logo' ? (
                    <Link href="/video/category/intentions">
                      <div
                        className="centeredBtn"
                        onMouseEnter={() => setHoverCenter(true)}
                        onMouseLeave={() => setHoverCenter(false)}>
                        <div className="triangleContent">
                          {hoverCenter ? (
                            <Fragment>Mes intentions</Fragment>
                          ) : (
                            <Fragment>
                              Anna Halprin
                              <br />
                              <hr />
                              Danser la vie
                            </Fragment>
                          )}
                        </div>
                        <div className="backgroundTriangle">
                          <img
                            className="triangle"
                            src="/images/ui/menu/triangle-halprin-white.png"
                            alt="regular triangle line png @transparentpng.com"
                          />
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <>
                      <p>{midTitle.toUpperCase()}</p>
                      <p>{midBody}</p>
                    </>
                  )}
                </div>
              </div>
              <div className="mobileLogo">
                Anna Halprin <br /> - <br /> Dancing Life
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
    </>
  );
};
