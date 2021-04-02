import Axios, { AxiosError, AxiosInstance } from 'axios';
import { store } from 'store';
import actions from 'store/actions';

export class Http {
  constructor(private readonly _axios: AxiosInstance) {
    this.useInterceptors();
  }

  setAuthorizationHeader(token: string): void {
    this._axios.defaults.headers.Authorization = `Bearer ${token}`;
  }

  unsetAuthorizationHeader(): void {
    delete this._axios.defaults.headers.Authorization;
  }

  private useInterceptors(): void {
    this._axios.interceptors.response.use(
      undefined,
      (error: AxiosError): Promise<AxiosError> => {
        if (error.response?.status === 401) {
          store.dispatch(actions.authActions.signOut());
        }
        return Promise.reject(error);
      },
    );
  }

  /* eslint-disable */

  get get() {
    return this._axios.get;
  }

  get post() {
    return this._axios.post;
  }

  get put() {
    return this._axios.put;
  }

  get patch() {
    return this._axios.patch;
  }

  get delete() {
    return this._axios.delete;
  }

  get axios(): AxiosInstance {
    return this._axios;
  }
}

export const http = new Http(
  Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  }),
);
