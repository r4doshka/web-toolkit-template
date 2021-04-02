import React from 'react';
import { HeaderDefault } from 'UIcomponents';

import styles from './AuthLayout.module.scss';

interface IProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <HeaderDefault />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default AuthLayout;
