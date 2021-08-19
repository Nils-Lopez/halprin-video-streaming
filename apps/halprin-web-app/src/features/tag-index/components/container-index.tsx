import React, { FC, Fragment } from 'react';
import * as S from './container-index.style';

type Props = {
  selectedTag: any;
  setSelectedTag: any;
  tags: any;
  lang: string;
};

export const ContainerIndex: FC<Props> = (props) => {
  const { selectedTag, setSelectedTag, tags, lang = 'en' } = props;

  const capitalizeTheFirstLetterOfEachWord = (label: string) => {
    const separateWord = label.toLowerCase().split(' ');
    for (let i = 0; i < separateWord.length; i++) {
      separateWord[i] =
        separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
    }
    return separateWord.join(' ');
  };

  const chooseTag = (label: string) => {
    tags.forEach((tag: any) => {
      if (capitalizeTheFirstLetterOfEachWord(tag.label[lang]) === label) {
        setSelectedTag(tag);
      }
    });
  };

  const orderedLabels = new Array<string>();

  tags.forEach((tag: any) => {
    orderedLabels.push(capitalizeTheFirstLetterOfEachWord(tag.label[lang]));
  });

  orderedLabels.sort(Intl.Collator().compare);

  type letterProps = {
    letter: string;
  };

  const LetterTag: FC<letterProps> = (props) => {
    const { letter } = props;
    const tags = new Array<string>();

    orderedLabels.map((label: any) => {
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

    return (
      <>
        {tags.length > 2 ? (
          <>
            {tags.map((label: string, index: number) => {
              if (
                ((index + 1) / 3).toFixed(0).toString() ===
                ((index + 1) / 3).toString()
              ) {
                return (
                  <Fragment key={index}>
                    <tr>
                      <td
                        className={
                          selectedTag &&
                          capitalizeTheFirstLetterOfEachWord(
                            selectedTag.label[lang]
                          ) === tags[index - 2] &&
                          'selected'
                        }>
                        <button onClick={() => chooseTag(tags[index - 2])}>
                          {tags[index - 2]}
                        </button>
                      </td>
                      <td
                        className={
                          selectedTag &&
                          capitalizeTheFirstLetterOfEachWord(
                            selectedTag.label[lang]
                          ) === tags[index - 1] &&
                          'selected'
                        }>
                        <button onClick={() => chooseTag(tags[index - 1])}>
                          {tags[index - 1]}
                        </button>
                      </td>
                      <td
                        className={
                          selectedTag &&
                          capitalizeTheFirstLetterOfEachWord(
                            selectedTag.label[lang]
                          ) === label &&
                          'selected'
                        }>
                        <button onClick={() => chooseTag(label)}>
                          {label}
                        </button>
                      </td>
                    </tr>
                    {(!tags[index + 2] && tags[index + 1]) ||
                      (!tags[index + 3] && tags[index + 1] && tags[index + 2] && (
                        <>
                          <tr>
                            <td>
                              <button
                                onClick={() => chooseTag(tags[index + 1])}>
                                {tags[index + 1]}
                              </button>
                            </td>
                            {tags[index + 2] && (
                              <td>
                                <button
                                  onClick={() => chooseTag(tags[index + 2])}>
                                  {tags[index + 2]}
                                </button>
                              </td>
                            )}
                          </tr>
                        </>
                      ))}
                  </Fragment>
                );
              }
            })}
          </>
        ) : (
          <>
            <tr>
              <td>
                <button onClick={() => chooseTag(tags[0])}>{tags[0]}</button>
              </td>
              {tags[1] && (
                <td>
                  <button onClick={() => chooseTag(tags[1])}>{tags[1]}</button>
                </td>
              )}
            </tr>
          </>
        )}
      </>
    );
  };

  return (
    <S.Ctn>
      <table>
        {orderedLabels.map((label: any, index: number) => {
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
                <br />
                <tr className="letterTitle" id={label.charAt(0).toUpperCase()}>
                  <th colSpan={3}>
                    {label
                      .charAt(0)
                      .toUpperCase()
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')}
                  </th>
                </tr>
                <LetterTag letter={label.charAt(0).toUpperCase()} />
              </Fragment>
            );
          }
        })}
      </table>
    </S.Ctn>
  );
};
