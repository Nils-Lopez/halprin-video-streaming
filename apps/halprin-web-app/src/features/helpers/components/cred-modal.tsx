import { Credit } from '@/data/data.types';
import { SupportedLang } from '@/features/video/types';
import * as S from './cred-modal.style';

type Props = {
  modal: Credit[];
  lang?: SupportedLang;
  showModal: (modal: Credit[]) => void;
};

export const CredModal: React.FC<Props> = (props) => {
  const { modal, lang = 'en', showModal } = props;

  const credits: { title: string; content: string; link: string }[] = [];

  modal.map((credit) => {
    const splitted = credit.htmlLabel[lang].slice(6).split('<');
    const title = splitted[0];
    const content = splitted[3].slice(3);
    const link = splitted[5] ? splitted[5].split('>')[1] : 'false';
    credits.push({ title: title, content: content, link: link });
  });

  return (
    <S.Modal
      onClick={() => {
        showModal([
          {
            htmlLabel: {
              en: '<b><i>Dance with Life. Anna, a Living Legend</i></…tp://www.annahalprin.org">www.annahalprin.org</a>',
              fr: '<b><i>Dance with Life. Anna, a Living Legend</i></…tp://www.annahalprin.org">www.annahalprin.org</a>',
            },
            id: 11,
            index: true,
            year: 0,
          },
        ]);
      }}>
      <div className="centered">
        <div className="head">
          <h2>{lang === 'en' ? 'Credits' : 'Crédits'}</h2>
        </div>
        <div className="body">
          {credits.map((cred) => {
            return (
              <>
                <b>
                  <i>{cred.title}</i>
                </b>
                <br />
                <p>{cred.content}</p>
                {cred.link !== 'false' && (
                  <>
                    <a href={'https://' + cred.link}>
                      <b>{cred.link}</b>
                    </a>
                    <br />
                  </>
                )}
                <br />
              </>
            );
          })}
        </div>
      </div>
    </S.Modal>
  );
};
