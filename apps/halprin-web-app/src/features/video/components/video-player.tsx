import { FC } from 'react';
import * as S from './video-player.style';

type Props = {
  src: string;
};
export const VideoPlayer: FC<Props> = (props) => {
  const { src } = props;
  return <S.Ctn>Here's my video {src}</S.Ctn>;
};
