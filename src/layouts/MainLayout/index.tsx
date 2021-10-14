import React from 'react';
import * as UI from './styles';

interface IMainLayoutProps {
  children: any;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <UI.Wrapper>
      <UI.Layout>
        {children}
      </UI.Layout>
    </UI.Wrapper>
  );
};

export default MainLayout;
