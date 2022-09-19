import * as S from './help-modal.style';

type Props = {
  modal?: string;
  lang?: string;
  showModal: (modal: string) => void;
};

export const HelpModal: React.FC<Props> = (props) => {
  const { modal, lang = 'en', showModal } = props;

  const src = "/images/help/" + lang + "/" + modal + ".png"

  return (
    <S.Modal
      onClick={() => {
        showModal("");
      }}>
      <div className={"centered " + modal}>
        <img src={src}/>
      </div>
    </S.Modal>
  );
};
