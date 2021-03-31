import { reducer as AuthReducer } from 'features/auth';
import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { AppDispatch } from './types';

const authPersistConfig = {
  storage,
  key: 'auth',
  whitelist: ['token', 'email'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, AuthReducer),
});
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default rootReducer;
