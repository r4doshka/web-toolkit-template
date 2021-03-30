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
      <div className={styles.content}>
        <div className={styles.container}>
          {renderBreadcrumbs && <div className={styles.breadcrumbs}>{renderBreadcrumbs}</div>}
          {pageTitle && <h1 className={styles.pageTitle}>{pageTitle}</h1>}
          <div className={styles.pageContent}>{children}</div>
        </div>
      </div>
      <FooterDefault />
    </div>
  );
};

export default MainLayout;
