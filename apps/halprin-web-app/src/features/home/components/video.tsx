import { useTranslation } from 'next-i18next';
import { homeConfig } from '../home.config';

type Props = {
  children?: never;
};

export const Video: React.FC<Props> = () => {
  const { t } = useTranslation(homeConfig.i18nNamespaces);

  return <>Vidéo</>;
};
