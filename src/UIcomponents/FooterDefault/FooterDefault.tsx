import { FC } from 'react';

import styles from './styles.module.scss';

type TFooterDefault = FC<Record<string, unknown>>;

export const FooterDefault: TFooterDefault = () => {
  return <div className={styles.footer}>footer</div>;
};
