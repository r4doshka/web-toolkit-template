import actions from './actions';
import reducers from './reducers';
import * as services from './services';
import { store } from './store';

export type RootState = ReturnType<typeof reducers>;

export type RootAction = typeof actions;

export type AppDispatch = typeof store.dispatch;

export type Services = typeof services;
