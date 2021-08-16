import { MainLayout } from '@/components/layout/main-layout';
import { useTranslation } from 'next-i18next';
import { tagIndexConfig } from './tag-index.config';
import * as S from './tag-index.style';
import React, { useState } from 'react';
import { NavbarIndex } from './components/navbar-index';
import { FooterIndex } from './components/footer-index';
import { ContainerIndex } from './components/container-index';

type Props = {
  children?: never;
};

export const TagIndexPage: React.FC<Props> = () => {
  const { t } = useTranslation(tagIndexConfig.i18nNamespaces);
  const [selectedTag, setSelectedTag] = useState('');

  return (
    <MainLayout>
      <S.Ctn>
        <NavbarIndex />
        <ContainerIndex
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
        <FooterIndex
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
      </S.Ctn>
    </MainLayout>
  );
};
