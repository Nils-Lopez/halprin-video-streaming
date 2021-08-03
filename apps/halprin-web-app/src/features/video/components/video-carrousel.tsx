import { FC } from 'react';
import * as S from './video-carrousel.style';

type Props = {
  category: string;
};

export const VideoCarrousel: FC<Props> = (props) => {
  const { category } = props;

  return <S.Ctn>VideoCarrousel of {category}</S.Ctn>;
};
