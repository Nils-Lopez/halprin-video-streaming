import * as S from './help-modal.style';

type Props = {
  modal?: { title: string; content: string };
  lang?: string;
  showModal: (modal: { title: string; content: string }) => void;
};

export const HelpModal: React.FC<Props> = (props) => {
  const { modal, lang = 'en', showModal } = props;

  return (
    <S.Modal
      onClick={() => {
        showModal({ title: 'false', content: 'false' });
      }}>
      <div className="centered">
        <div className="head">{modal && modal.title}</div>
        <div className="body">{modal && modal.content}</div>
        <div>{lang}</div>
      </div>
    </S.Modal>
  );
};
