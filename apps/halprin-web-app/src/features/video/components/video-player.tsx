import { FC, useState } from 'react';
import * as S from './video-player.style';
import ReactPlayer from 'react-player';

type Props = {
  url: string;
};

export const VideoPlayer: FC<Props> = (props) => {
  const { url } = props;
  const [playing, setPlaying] = useState(false);

  return (
    <S.Ctn>
      <div className="wrapper">
        <div className="player">
          <ReactPlayer
            url={url}
            controls={true}
            playing={playing}
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </S.Ctn>
  );
};
