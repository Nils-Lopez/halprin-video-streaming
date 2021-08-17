import { FC, useState } from 'react';
import * as S from './video-navbar.style';
import Link from 'next/link';
import { MediaCategory } from '@/data/data.types';
import { SupportedLang } from '@/features/video/types';

type Props = {
  lang: SupportedLang;
  categories: MediaCategory[];
};

export const VideoNavbar: FC<Props> = (props) => {
  const { categories, lang } = props;
  const [showCategories, updateShowCategories] = useState(false);

  return (
    <S.Ctn>
      {showCategories ? (
        <>
          <div className="row">
            {categories.map((category, index) => {
              return (
                <Link
                  key={`${category.categ_slug}`}
                  href={'/video/category/' + category.categ_slug}>
                  {category.label[lang]}
                </Link>
              );
            })}
          </div>
          <button onClick={() => updateShowCategories(false)}>hide</button>
        </>
      ) : (
        <div className="hiddenMenu">
          <button onClick={() => updateShowCategories(true)}>show</button>
        </div>
      )}
    </S.Ctn>
  );
};
