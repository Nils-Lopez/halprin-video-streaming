import { FC } from 'react';
import * as S from './navbar-index.style';
import Link from 'next/link';

type Props = {
  children?: never;
};

export const NavbarIndex: FC<Props> = (props) => {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'Y', 'Z'];

  return (
    <S.Ctn>
      <div className="indexTitle">Index</div>
      <div className="nav">
        <div className="alphabetNav">
          {alphabet.map((letter) => {
            return (
              <button className="link" key={letter}>
                {letter}
              </button>
            );
          })}
        </div>
        <button className="link">DATE</button>
        <button className="link">MEDIA</button>
      </div>
    </S.Ctn>
  );
};
