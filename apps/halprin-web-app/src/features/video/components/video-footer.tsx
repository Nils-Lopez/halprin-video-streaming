import * as S from './video-footer.style';
import { VideoCarrousel } from './video-carrousel';
import Link from 'next/link';

export const VideoFooter = () => {
  return (
    <S.Ctn>
      <Link href="/menu">Menu</Link>
      <div className="playlistsButtons">
        <button>All</button>
        <button>My List</button>
        <button>To see</button>
        <button>Already Seen</button>
      </div>
      <VideoCarrousel category={'workshop'} />
    </S.Ctn>
  );
};
