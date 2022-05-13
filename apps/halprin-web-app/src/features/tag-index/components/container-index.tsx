import { VideoPlayer } from '@/features/video/components/video-player';
import React, { FC, Fragment, ReactFragment } from 'react';
import * as S from './container-index.style';
import { MediaRepo } from '../../video/repository/media.repo';
import { CleanedCredit, Media, Tag } from '@/data/data.types';
import { SupportedLang } from '@/features/video/types';

type Props = {
  selectedTag: Tag;
  setSelectedTag: (tag: Tag) => void;
  selectedVideo: Media;
  selectVideo: (media: Media) => void;
  selectedCred: CleanedCredit;
  selectCred: (cred: CleanedCredit) => void;
  credits: CleanedCredit[];
  selectMedia: (media: Media) => void;
  tags: { slug: string; tag: Tag }[];
  lang: SupportedLang;
  chronologicMedia: any;
  indexMedia: { type: string; data?: string[] };
};

export const ContainerIndex: FC<Props> = (props) => {
  const {
    selectedTag,
    setSelectedTag,
    selectVideo,
    selectedCred,
    selectCred,
    credits,
    selectedVideo,
    selectMedia,
    tags,
    chronologicMedia,
    lang = 'en',
    indexMedia,
  } = props;

  const toCamelCase = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const chooseTag = (label: string) => {
    let isATag = undefined;
    let isACred = undefined;
    tags.forEach((tag: { slug: string; tag: Tag }) => {
      if (
        tag.tag.label &&
        toCamelCase(tag.tag.label[lang]) === label &&
        tag.tag.media
      ) {
        setSelectedTag(tag.tag);
        selectVideo(tag.tag.media[0]);
        selectCred({ label: 'false', index: true, id: 0 });
        selectMedia({ thumb: 'false' });
        isATag = true;
      }
    });
    if (!isATag) {
      credits.map((cred: CleanedCredit) => {
        if (cred.label === label) {
          selectCred(cred);
          setSelectedTag({ label: { en: 'false', fr: '' }, media: [] });
          selectMedia({ thumb: 'false' });
          isACred = true;
        }
      });
    }
    if (!isACred && !isATag) {
      const mediaRepo = new MediaRepo();
      const media = mediaRepo.get();
      media.map((media: Media) => {
        if (media.title && media.title[lang] === label) {
          selectCred({ label: 'false', index: true, id: 0 });
          setSelectedTag({ label: { en: 'false', fr: '' }, media: [] });
          selectMedia(media);
          selectVideo(media);
        }
      });
    }
  };

  const orderedLabels: string[] = [];

  tags.forEach((tag: { slug: string; tag: Tag }) => {
    if (tag.tag.label) {
      orderedLabels.push(toCamelCase(tag.tag.label[lang]));
    }
  });

  credits.map((credit: CleanedCredit) => {
    orderedLabels.push(credit.label);
  });

  orderedLabels.sort(Intl.Collator().compare);

  type letterProps = {
    letter: string;
    titles?: string[];
  };

  //RENDER ROWS OF TAGS FOR EACH LETTER :

  const TagsDisplayer = (props: letterProps) => {
    const { letter, titles } = props;
    const tags: string[] = [];

    //MEDIA INDEX
    if (indexMedia.type === 'media' && indexMedia.data) {
      indexMedia.data.map((title: string) => {
        if (
          title
            .charAt(0)
            .toUpperCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') ===
          letter.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        ) {
          tags.push(title);
        }
      });
    }
    //DATE INDEX
    else if (indexMedia.type === 'date' && titles && letter === 'FALSE') {
      titles.map((title) => {
        tags.push(title);
      });
    }
    //TAGS INDEX
    else {
      orderedLabels.map((label: string) => {
        if (
          label
            .charAt(0)
            .toUpperCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') ===
          letter.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        ) {
          tags.push(label);
        }
      });
    }

    const isACredit = (label: string) => {
      let answer: string | boolean = 'loading';
      credits.map((credit: CleanedCredit, index: number) => {
        if (credit.label === label) {
          answer = true;
        }
        if (index === credits.length - 1 && answer !== true) {
          answer = false;
        }
      });
      return answer;
    };

    return (
      <Fragment key={'letter-tag-' + letter}>
        {tags.length > 2 ? (
          tags.map((label: string, index: number) => {
            return (
              <Fragment key={'tag' + index}>
                {/* RENDER ROWS OF 3 TAGS : */}
                {((index + 1) / 3).toFixed(0).toString() ===
                ((index + 1) / 3).toString() ? (
                  <>
                    <tr className="desktop" key={'tr' + letter + index}>
                      <td
                        className={
                          (selectedTag.label &&
                            toCamelCase(selectedTag.label[lang]) ===
                              tags[index - 2]) ||
                          (selectedCred &&
                            selectedCred.label === tags[index - 2])
                            ? 'selected'
                            : ''
                        }>
                        <button onClick={() => chooseTag(tags[index - 2])}>
                          {isACredit(tags[index - 2]) ? (
                            <i>{tags[index - 2]}</i>
                          ) : (
                            <>{tags[index - 2]}</>
                          )}
                        </button>
                      </td>
                      <td
                        className={
                          (selectedTag.label &&
                            toCamelCase(selectedTag.label[lang]) ===
                              tags[index - 1]) ||
                          (selectedCred &&
                            selectedCred.label === tags[index - 1])
                            ? 'selected'
                            : ''
                        }>
                        <button onClick={() => chooseTag(tags[index - 1])}>
                          {isACredit(tags[index - 1]) ? (
                            <i>{tags[index - 1]}</i>
                          ) : (
                            <>{tags[index - 1]}</>
                          )}
                        </button>
                      </td>
                      <td
                        className={
                          (selectedTag.label &&
                            toCamelCase(selectedTag.label[lang]) === label) ||
                          (selectedCred && selectedCred.label === label)
                            ? 'selected'
                            : ''
                        }>
                        <button onClick={() => chooseTag(label)}>
                          {isACredit(label) ? <i>{label}</i> : <>{label}</>}
                        </button>
                      </td>
                    </tr>
                    {/** RENDER ROWS OF LESS THAN 3 TAGS */}
                    {(!tags[index + 2] && tags[index + 1]) ||
                    (!tags[index + 3] && tags[index + 1] && tags[index + 2]) ? (
                      <tr className="desktop">
                        <td
                          className={
                            (selectedTag.label &&
                              toCamelCase(selectedTag.label[lang]) ===
                                tags[index + 1]) ||
                            (selectedCred &&
                              selectedCred.label === tags[index + 1])
                              ? 'selected'
                              : ''
                          }>
                          <button onClick={() => chooseTag(tags[index + 1])}>
                            {isACredit(tags[index + 1]) ? (
                              <i>{tags[index + 1]}</i>
                            ) : (
                              <>{tags[index + 1]}</>
                            )}
                          </button>
                        </td>
                        {tags[index + 2] ? (
                          <td
                            className={
                              (selectedTag.label &&
                                toCamelCase(selectedTag.label[lang]) ===
                                  tags[index + 2]) ||
                              (selectedCred &&
                                selectedCred.label === tags[index + 2])
                                ? 'selected'
                                : ''
                            }>
                            <button onClick={() => chooseTag(tags[index + 2])}>
                              {isACredit(tags[index + 2]) ? (
                                <i>{tags[index + 2]}</i>
                              ) : (
                                <>{tags[index + 2]}</>
                              )}
                            </button>
                          </td>
                        ) : null}
                      </tr>
                    ) : null}
                  </>
                ) : null}
              </Fragment>
            );
          })
        ) : (
          <Fragment key={'desktop' + letter}>
            <tr className="desktop" key={'tr-desk' + letter}>
              <td
                className={
                  (selectedTag.label &&
                    toCamelCase(selectedTag.label[lang]) === tags[0]) ||
                  (selectedCred && selectedCred.label === tags[0])
                    ? 'selected'
                    : ''
                }>
                <button onClick={() => chooseTag(tags[0])}>
                  {isACredit(tags[0]) ? <i>{tags[0]}</i> : <>{tags[0]}</>}
                </button>
              </td>
              {tags[1] ? (
                <td
                  className={
                    (selectedTag.label &&
                      toCamelCase(selectedTag.label[lang]) === tags[1]) ||
                    (selectedCred && selectedCred.label === tags[1])
                      ? 'selected'
                      : ''
                  }>
                  <button onClick={() => chooseTag(tags[1])}>
                    {isACredit(tags[1]) ? <i>{tags[1]}</i> : <>{tags[1]}</>}
                  </button>
                </td>
              ) : null}
            </tr>
          </Fragment>
        )}
        <Fragment key={'mobile-letter' + letter}>
          {tags.map((tag: string, index) => (
            <Fragment key={'mobile-tag-' + index}>
              <tr className="mobile" key={'tr-mobile' + letter}>
                <td
                  colSpan={3}
                  className={
                    (selectedTag.label &&
                      toCamelCase(selectedTag.label[lang]) === tag) ||
                    (selectedCred && selectedCred.label === tag)
                      ? 'selected'
                      : ''
                  }
                  key={'td-mobile' + letter}>
                  <button
                    onClick={() => chooseTag(tag)}
                    key={'td-mobile-btn' + letter}>
                    {isACredit(tag) ? <i>{tag}</i> : <>{tag}</>}
                  </button>
                </td>
              </tr>
            </Fragment>
          ))}
        </Fragment>
      </Fragment>
    );
  };

  const array = [0];

  return (
    <S.Ctn>
      {!selectedVideo || (selectedVideo && selectedVideo.thumb === 'false') ? (
        <div className="container">
          <table>
            <tbody>
              {indexMedia.data && indexMedia.type === 'media'
                ? indexMedia.data.map((title: string, index: number) => {
                    if (
                      index === 0 ||
                      (indexMedia.data &&
                        title
                          .charAt(0)
                          .normalize('NFD')
                          .replace(/[\u0300-\u036f]/g, '') !==
                          indexMedia.data[index - 1]
                            .charAt(0)
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, '') &&
                        title
                          .charAt(0)
                          .normalize('NFD')
                          .replace(/[\u0300-\u036f]/g, '') !== 'E')
                    ) {
                      return (
                        <Fragment key={index}>
                          <tr
                            className="letterTitle"
                            id={title.charAt(0).toUpperCase()}>
                            <th colSpan={3}>
                              {title
                                .charAt(0)
                                .toUpperCase()
                                .normalize('NFD')
                                .replace(/[\u0300-\u036f]/g, '')}
                            </th>
                          </tr>
                          <TagsDisplayer
                            letter={title.charAt(0).toUpperCase()}
                          />
                        </Fragment>
                      );
                    } else if (
                      (title
                        .charAt(0)
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '') === 'E' &&
                        lang === 'fr' &&
                        index === 17) ||
                      (indexMedia.data &&
                        title
                          .charAt(0)
                          .normalize('NFD')
                          .replace(/[\u0300-\u036f]/g, '') === 'E' &&
                        lang === 'en' &&
                        title
                          .charAt(0)
                          .normalize('NFD')
                          .replace(/[\u0300-\u036f]/g, '') !==
                          indexMedia.data[index - 1]
                            .charAt(0)
                            .normalize('NFD')
                            .replace(/[\u0300-\u036f]/g, ''))
                    ) {
                      return (
                        <Fragment key={index}>
                          <tr
                            className="letterTitle"
                            id={title.charAt(0).toUpperCase()}>
                            <th colSpan={3}>
                              {title
                                .charAt(0)
                                .toUpperCase()
                                .normalize('NFD')
                                .replace(/[\u0300-\u036f]/g, '')}
                            </th>
                          </tr>
                          <TagsDisplayer
                            letter={title.charAt(0).toUpperCase()}
                          />
                        </Fragment>
                      );
                    }
                  })
                : indexMedia.type === 'date'
                ? array.map((a, index) => {
                    const elements: ReactFragment[] = [];
                    chronologicMedia.forEach((media: Media[], year: number) => {
                      const titles: string[] = [];
                      media.map((m) => {
                        if (m.title) {
                          titles.push(m.title[lang]);
                        }
                      });
                      titles.sort();
                      elements.push(
                        <Fragment key={year}>
                          <tr className="letterTitle">
                            <th colSpan={3}>{year}</th>
                          </tr>
                          <TagsDisplayer titles={titles} letter={'FALSE'} />
                        </Fragment>
                      );
                    });

                    return (
                      <Fragment key={index}>
                        {elements.map((e, index) => {
                          return <Fragment key={index}>{e}</Fragment>;
                        })}
                      </Fragment>
                    );
                  })
                : orderedLabels.map((label: string, index: number) => {
                    if (
                      index === 0 ||
                      label
                        .charAt(0)
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '') !==
                        orderedLabels[index - 1]
                          .charAt(0)
                          .normalize('NFD')
                          .replace(/[\u0300-\u036f]/g, '')
                    ) {
                      return (
                        <Fragment key={index}>
                          <tr
                            className="letterTitle"
                            id={label.charAt(0).toUpperCase()}>
                            <th colSpan={3}>
                              {label
                                .charAt(0)
                                .toUpperCase()
                                .normalize('NFD')
                                .replace(/[\u0300-\u036f]/g, '')}
                            </th>
                          </tr>
                          <TagsDisplayer
                            letter={label.charAt(0).toUpperCase()}
                          />
                        </Fragment>
                      );
                    }
                  })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="video-container">
          <div className="player">
            <VideoPlayer video={selectedVideo} />
          </div>
        </div>
      )}
    </S.Ctn>
  );
};
