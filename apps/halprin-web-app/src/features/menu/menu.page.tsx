import { MainLayout } from '@/components/layout/main-layout';
import { useTranslation } from 'next-i18next';
import { menuConfig } from './menu.config';
import * as S from './menu-page.style';
import { useState } from 'react';
import Link from 'next/link';
import { eye, hand, mouth, round } from '../../../public/images/ui'

type Props = {
  children?: never;
};

export const MenuPage: React.FC<Props> = () => {
  const { t } = useTranslation(menuConfig.i18nNamespaces);
  const logo = t('app:menu.title');
  const workshop = t('app:menu.workshopDesc');
  const lifeAndArt = t('app:menu.myLifeAndArtDesc');
  const index = t('app:menu.indexDesc');
  const roadmap = t('app:menu.roadmapsDesc');
  const intentions = t('app:menu.intentions');
  const [centerContent, setCenterContent] = useState(logo);

  return (
    <>
      <MainLayout>
        <S.Ctn>
            <div className="topIcon">
              <Link href="/categories" passHref>
                <img src={'/images/ui/menu/round.png'} alt={t('app:menu.index')} onMouseEnter={() => setCenterContent(index)} onMouseLeave={() => setCenterContent(logo)} className="roundImg"/>
              </Link>
            </div>
            <div className="centralContainer">
              <Link href="/video/life-and-art" passHref>
                  <img src={'/images/ui/menu/eye.png'} alt={t('app:menu.myLifeAndArt')} onMouseEnter={() => setCenterContent(lifeAndArt)} onMouseLeave={() => setCenterContent(logo)} className="eyeImg"/>
              </Link>
              <Link href="/" passHref>
                <span
                  onMouseEnter={() => setCenterContent(intentions)}
                  onMouseLeave={() => setCenterContent(logo)} className="centerContent">
                  {centerContent}
                </span>
              </Link>
              <Link href="/video/roadmaps" passHref>
                <img src={'/images/ui/menu/hand.png'} alt={t('app:menu.roadmaps')} onMouseEnter={() => setCenterContent(roadmap)} onMouseLeave={() => setCenterContent(logo)} className="handImg"/>
              </Link>
            </div>
            <div className="bottomIcon">
              <Link href="/video/workshop" passHref>
                <img src={'/images/ui/menu/mouth.png'} alt={t('app:menu.workshop')} onMouseEnter={() => setCenterContent(workshop)}
                  onMouseLeave={() => setCenterContent(logo)} className="mouthImg"/>
              </Link>
            </div>
        </S.Ctn>
      </MainLayout>
    </>
  );
};
