import { FC } from 'react';

import styles from './styles.module.scss';

type TButtonDefault = FC<Record<string, unknown>>;

export const ButtonDefault: TButtonDefault = () => {
  return <button className={`btn ${styles.button}`}>ButtonDefault</button>;
};
