import { FC } from 'react';

import styles from './styles.module.scss';

type THeaderDefault = FC<Record<string, unknown>>;

export const HeaderDefault: THeaderDefault = () => {
  return <header className={styles.header}>header</header>;
};
