import { FC, useState } from 'react';
import * as S from './video-navbar.style';
import Link from 'next/link';

type Props = {
  categories: string[];
};

export const VideoNavbar: FC<Props> = (props) => {
  const { categories } = props;
  const [showCategories, updateShowCategories] = useState(false);

  return (
    <S.Ctn>
      {showCategories ? (
        <>
          <div className="row">
            {categories.map((category, index) => {
              return (
                <Link key={`${category}-${index}`} href={'/video/' + category}>
                  {category}
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
