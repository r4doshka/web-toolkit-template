import { FC } from 'react';

type TNotFound = FC<Record<string, unknown>>;

export const NotFound: TNotFound = () => {
  return <div>Page not found</div>;
};
