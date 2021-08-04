import { FC, useState } from 'react';
import * as S from './menu.style';
import ReactPlayer from 'react-player';

type Props = {
  url: string;
};

export const VideoPlayer: FC<Props> = (props) => {
  const { url } = props;
  const [playing, setPlaying] = useState(false);

  return (
    <S.Ctn>
      <ReactPlayer url={url} playing={playing} controls={false} />
      <button onClick={() => setPlaying(!playing)}>
        {playing ? 'Pause' : 'Play'}
      </button>
    </S.Ctn>
  );
};
