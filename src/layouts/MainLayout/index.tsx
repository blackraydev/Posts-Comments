import React from 'react';
import * as UI from './styles';

interface IMainLayoutProps {
  children: any;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <UI.Layout>
      {children}
    </UI.Layout>
  )
}

export default MainLayout;
