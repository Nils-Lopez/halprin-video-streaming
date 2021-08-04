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
  const logo = 'Anna Halprin - Danser la vie';
  const { t } = useTranslation(menuConfig.i18nNamespaces);
  const [centerContent, setCenterContent] = useState(logo);

  const workshop = 'Workshop is .....';
  const lifeAndArt = 'My life and the art is .....';
  const index = 'Index is .....';
  const roadmap = 'Roadmap is .....';

  return (
    <>
      <MainLayout>
        <S.Ctn>
          <Link href="/video/workshop">
            <span
              onMouseEnter={() => setCenterContent(workshop)}
              onMouseLeave={() => setCenterContent(logo)}>
              Atelier
            </span>
          </Link>
          <Link href="/video/life-and-art">
            <span
              onMouseEnter={() => setCenterContent(lifeAndArt)}
              onMouseLeave={() => setCenterContent(logo)}>
              Ma vie et l'art
            </span>
          </Link>
          <Link href="/video/roadmap">
            <span
              onMouseEnter={() => setCenterContent(roadmap)}
              onMouseLeave={() => setCenterContent(logo)}>
              Feuille de route
            </span>
          </Link>
          <Link href="/categories">
            <span
              onMouseEnter={() => setCenterContent(index)}
              onMouseLeave={() => setCenterContent(logo)}>
              Index
            </span>
          </Link>
          <br />
          <Link href="/">{centerContent}</Link>
        </S.Ctn>
      </MainLayout>
    </>
  );
};
