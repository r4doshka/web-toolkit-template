import React from 'react';
import { FooterDefault, HeaderDefault } from 'UIcomponents';

import styles from './MainLayout.module.scss';

interface IProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <HeaderDefault />
      {children}
      <FooterDefault />
    </div>
  );
};

export default MainLayout;
