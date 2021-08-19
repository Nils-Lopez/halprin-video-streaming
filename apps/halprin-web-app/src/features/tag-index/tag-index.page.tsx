import { MainLayout } from '@/components/layout/main-layout';
import { useTranslation } from 'next-i18next';
import { tagIndexConfig } from './tag-index.config';
import * as S from './tag-index.style';
import React, { useState } from 'react';
import { NavbarIndex } from './components/navbar-index';
import { FooterIndex } from './components/footer-index';
import { ContainerIndex } from './components/container-index';
import { TagRepo } from '../video/repository/tag.repo';

type Props = {
  lang: string;
};

export const TagIndexPage: React.FC<Props> = (props) => {
  const { t } = useTranslation(tagIndexConfig.i18nNamespaces);

  const { lang } = props;

  const [selectedTag, setSelectedTag] = useState(null);

  const repo = new TagRepo();

  const tags = repo.getMediaByTags();

  return (
    <MainLayout>
      <S.Ctn>
        <NavbarIndex tags={tags} lang={lang} />
        <ContainerIndex
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          tags={tags}
          lang={lang}
        />
        <FooterIndex selectedTag={selectedTag} lang={lang} />
      </S.Ctn>
    </MainLayout>
  );
};
