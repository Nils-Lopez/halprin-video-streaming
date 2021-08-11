import { Layout } from './main-layout.style';

export const MainLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <main>{children}</main>
      </div>
    </Layout>
  );
};
