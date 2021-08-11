import { MainLayout } from '@/components/layout/main-layout';
import { useTranslation } from 'next-i18next';
import { menuConfig } from './menu.config';
import * as S from './menu-page.style';
import { useState } from 'react';
import Link from 'next/link';

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
          <Link href="/video/workshop" passHref>
            <span
              onMouseEnter={() => setCenterContent(workshop)}
              onMouseLeave={() => setCenterContent(logo)}>
              {t('app:menu.workshop')}
            </span>
          </Link>
          <Link href="/video/life-and-art" passHref>
            <span
              onMouseEnter={() => setCenterContent(lifeAndArt)}
              onMouseLeave={() => setCenterContent(logo)}>
              {t('app:menu.myLifeAndArt')}
            </span>
          </Link>
          <Link href="/video/roadmap" passHref>
            <span
              onMouseEnter={() => setCenterContent(roadmap)}
              onMouseLeave={() => setCenterContent(logo)}>
              {t('app:menu.roadmaps')}
            </span>
          </Link>
          <Link href="/categories" passHref>
            <span
              onMouseEnter={() => setCenterContent(index)}
              onMouseLeave={() => setCenterContent(logo)}>
              {t('app:menu.index')}
            </span>
          </Link>
          <br />
          <Link href="/" passHref>
            <span
              onMouseEnter={() => setCenterContent(intentions)}
              onMouseLeave={() => setCenterContent(logo)}>
              {centerContent}
            </span>
          </Link>
        </S.Ctn>
      </MainLayout>
    </>
  );
};
