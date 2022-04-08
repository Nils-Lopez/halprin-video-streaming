import { useState } from 'react';
import { Layout } from './main-layout.style';

export const MainLayout: React.FC = (props) => {
  const { children } = props;
  const [mobileMenu, setMobileMenu] = useState(false);
  // const [help, setHelp] = useState(false);
  // const [credits, setCredits] = useState(false);
  return (
    <Layout>
      <div className="flex flex-col h-screen">
        {/* <div className="top">
          <div className="helpers">
             {help ? (
              <button onMouseLeave={() => setHelp(false)}>
                <img src="/images/ui/help/help.png" alt="help" />
              </button>
            ) : (
              <button
                className="helper"
                onMouseEnter={() => setHelp(true)}></button>
            )}
            {credits ? (
              <button onMouseLeave={() => setCredits(false)}>
                <img src="/images/ui/help/s.png" alt="credits" />
              </button>
            ) : (
              <button
                className="helper"
                onMouseEnter={() => setCredits(true)}></button>
            )} 
          </div>
        </div> */}
        {!mobileMenu ? (
          <div className="mobile-menu-toggle">
            <button
              onClick={() => {
                setMobileMenu(true);
              }}>
              <img
                src={'/images/ui/menu/mouth.png'}
                alt="Menu"
                className="mouthImg"
              />
            </button>
          </div>
        ) : (
          <div className="mobile-menu">
            <i className="fa-thin fa-xmark" />{' '}
          </div>
        )}
        <main>{children}</main>
      </div>
    </Layout>
  );
};
