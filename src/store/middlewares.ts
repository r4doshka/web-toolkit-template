import { signInAsync, signUpAsync } from 'features/auth/thunks';
import { AnyAction, Dispatch } from 'redux';
import { REHYDRATE } from 'redux-persist';
import { http } from 'services/http';

import actions from './actions';

export const authMiddleware = () => (next: Dispatch<AnyAction>) => (action: AnyAction): AnyAction => {
  if (
    action.type === signInAsync.fulfilled.type ||
    action.type === actions.authActions.signUp.type ||
    action.type === signUpAsync.fulfilled.type
  ) {
    http.setAuthorizationHeader(action.payload.token);
  }

  if (action.type === REHYDRATE) {
    action?.payload?.token && http.setAuthorizationHeader(action?.payload?.token);
  }

  if (action.type === actions.authActions.signOut.type) {
    http.unsetAuthorizationHeader();
  }

  return next(action);
};
