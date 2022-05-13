import { Media } from '@/data/data.types';
import { Helpers } from '@/features/helpers/helpers';
import { SupportedLang } from '@/features/video/types';
import { Layout } from './main-layout.style';

type Props = {
  help?: { title: string; content: string };
  media?: Media;
  lang: SupportedLang;
};

export const MainLayout: React.FC<Props> = (props) => {
  const { children, help, media, lang } = props;
  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <Helpers help={help} media={media} lang={lang} />
        <main>{children}</main>
      </div>
    </Layout>
  );
};
