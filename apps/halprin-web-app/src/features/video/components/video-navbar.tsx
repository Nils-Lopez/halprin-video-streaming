import { FC, useState } from 'react';
import * as S from './video-navbar.style';
import Link from 'next/link';

type Props = {
  categories: string[];
};

export const VideoNavbar: FC<Props> = (props) => {
  const { categories } = props;

  const navLinks: any = [];

  categories.forEach((c) => {
    navLinks.push(<Link href={'/video/' + c}>{c}</Link>);
  });

  return <S.Ctn>{navLinks}</S.Ctn>;
};
