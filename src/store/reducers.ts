import { reducer as AuthReducer } from 'features/auth';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  storage,
  key: 'auth',
  whitelist: ['token', 'email'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, AuthReducer),
});

export default rootReducer;
