import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import { authMiddleware } from './middlewares';
import reducer from './reducers';
import { api } from './services';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: { api },
      },
      devTools: process.env.NODE_ENV !== 'production',
      serializableCheck: false,
      logger,
    }).concat(authMiddleware);
  },
});

const persistor = persistStore(store);

export { store, persistor };
