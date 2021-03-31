// import * as services from './services';
import * as api from 'api/index';

import actions from './actions';
import reducers from './reducers';
import { store } from './store';

export type RootState = ReturnType<typeof reducers>;

export type RootAction = typeof actions;

export type AppDispatch = typeof store.dispatch;

export type Services = typeof api;
