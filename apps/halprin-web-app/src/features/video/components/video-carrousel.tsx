import { Fragment, FC } from 'react';
import * as S from './video-carrousel.style';
import { Media } from '@/data/data.types';
import { SupportedLang } from '@/features/video/types';

type Props = {
  lang: SupportedLang;
  media: Media[];
  selectedVideo: Media;
  selectVideo: (media: Media) => void;
};

export const VideoCarrousel: FC<Props> = (props) => {
  const { media, lang, selectedVideo, selectVideo } = props;

  return (
    <>
      <S.Carrousel>
        <div className={media.length <= 3 ? 'carrousel-centered' : 'carrousel'}>
          {media.map((media) => {
            const thumb = media.thumb;
            const title = media.title ? media.title[lang] : null;
            return (
              <Fragment key={media.media_slug}>
                {media === selectedVideo ? (
                  <div className="main" id={media.media_slug}>
                    <div className={'now-playing txt-' + media.category}>
                      {lang === 'en' ? (
                        <>
                          NOW <br /> PLAYING
                        </>
                      ) : (
                        <>
                          LECTURE <br /> EN COURS
                        </>
                      )}
                    </div>
                    <div className={'video-title ' + media.category}>
                      {title}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      selectVideo(media);
                    }}
                    id={media.media_slug}>
                    <div className="slide">
                      <img src={thumb} alt={'A picture of : ' + title} />
                      <div className={'video-title ' + media.category}>
                        {title}
                      </div>
                    </div>
                  </button>
                )}
              </Fragment>
            );
          })}
        </div>
      </S.Carrousel>
    </>
  );
};
