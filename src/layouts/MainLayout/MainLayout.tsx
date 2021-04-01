import React from 'react';
import { FooterDefault, HeaderDefault } from 'UIcomponents';

import styles from './MainLayout.module.scss';

interface IProps {
  children: React.ReactNode;
  renderBreadcrumbs?: React.ReactNode;
  pageTitle?: string;
}

const MainLayout: React.FC<IProps> = ({ pageTitle, renderBreadcrumbs, children }) => {
  return (
    <div className={styles.root}>
      <HeaderDefault />
      main layout
      <FooterDefault />
    </div>
  );
};

export default MainLayout;
