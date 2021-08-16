import React, { FC, useEffect, useState } from 'react';
import * as S from './footer-index.style';
import { VideoCarrousel } from '@/features/video/components/video-carrousel';
import { MediaRepo } from '@/features/video/repository/media.repo';

type Props = {
  selectedTag: string;
  setSelectedTag: any;
};

export const FooterIndex: FC<Props> = (props) => {
  const { selectedTag, setSelectedTag } = props;

  const indexMedia = async () => {
    const media = await new MediaRepo().findByCategory('index');
  };

  const [media, setMedia] = useState(indexMedia);

  useEffect(() => {
    if (selectedTag !== '' && selectedTag !== undefined) {
      const newMedias = new MediaRepo().search({
        tagSlugs: [selectedTag],
      });
      setMedia(newMedias);
    }
  }, [selectedTag]);

  return (
    <S.Ctn>
      <div className="topBar">
        <div className="left">
          LISTNAME: {selectedTag && <>[INDEX] {selectedTag}</>}
        </div>
        <div className="center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevrons-left center-icon"
            width="27"
            height="27"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <polyline points="11 7 6 12 11 17"></polyline>
            <polyline points="17 7 12 12 17 17"></polyline>
          </svg>
          1 / {media.length}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevrons-right center-icon"
            width="27"
            height="27"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <polyline points="7 7 12 12 7 17"></polyline>
            <polyline points="13 7 18 12 13 17"></polyline>
          </svg>
        </div>
        <div className="right">
          <button className="listBtn">ALL</button>
          <button className="listBtn">LIST</button>
          <button className="listBtn">HISTORY</button>
          <button className="listBtn">UNSEEN</button>
        </div>
      </div>
      <VideoCarrousel lang={'en'} media={media} />
    </S.Ctn>
  );
};
