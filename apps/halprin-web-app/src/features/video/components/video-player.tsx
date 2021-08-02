import { FC } from 'react';
import * as S from './video-player.style';
import ReactPlayer from 'react-player';

type Props = {
  url: string;
};
export const VideoPlayer: FC<Props> = (props) => {
  const { url } = props;
  return (
    <S.Ctn>
      <ReactPlayer url={url} />
    </S.Ctn>
  );
};
