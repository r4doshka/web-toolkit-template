import { createSelector } from 'reselect';
import { RootState } from 'store/types';

import { AuthStore } from './types';

export const selectAuth = (state: RootState): AuthStore => state.auth;
export const selectToken = createSelector(selectAuth, (auth) => auth.token);
