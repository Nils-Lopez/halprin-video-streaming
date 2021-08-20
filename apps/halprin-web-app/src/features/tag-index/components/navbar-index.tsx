import { FC } from 'react';
import * as S from './navbar-index.style';
import Link from 'next/link';

type Props = {
  tags: any;
  lang: string;
};

export const NavbarIndex: FC<Props> = (props) => {
  const { tags, lang = 'fr' } = props;

  const orderedLabels = new Array<string>();

  tags.forEach((tag: any) => {
    const capitalizeTheFirstLetterOfEachWord = (label: string) => {
      const separateWord = label.toLowerCase().split(' ');
      for (let i = 0; i < separateWord.length; i++) {
        separateWord[i] =
          separateWord[i].charAt(0).toUpperCase() +
          separateWord[i].substring(1);
      }
      return separateWord
        .join(' ')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    };
    orderedLabels.push(capitalizeTheFirstLetterOfEachWord(tag.label[lang]));
  });

  orderedLabels.sort();

  const alphabet = () => {
    const letters = new Array<string>();
    orderedLabels.forEach((tag: any, index: number) => {
      if (
        index === 0 ||
        tag.charAt(0).toUpperCase() !==
          orderedLabels[index - 1].charAt(0).toUpperCase()
      ) {
        letters.push(tag.charAt(0).toUpperCase());
      }
    });
    return letters as string[];
  };

  const alphabetLinks = alphabet();

  return (
    <S.Ctn>
      <div className="desktop">
        <div className="indexTitle">Index</div>
        <div className="nav">
          <div className="alphabetNav">
            {alphabetLinks.map((letter) => {
              return (
                <Link href={'#' + letter} passHref>
                  <p className="link">{letter}</p>
                </Link>
              );
            })}
          </div>
          <div className="top-right">
            <button className="link">DATE</button>
            <button className="link">MEDIA</button>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="top">
          <div className="top-left">Index</div>
          <div className="top-right">
            <button className="link">DATE</button>
            <button className="link">MEDIA</button>
          </div>
        </div>
        <div className="nav-mobile">
          <div className="alphabetNav-mobile">
            {alphabetLinks.map((letter) => {
              return (
                <Link href={'#' + letter} passHref>
                  <p className="link">{letter}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </S.Ctn>
  );
};
