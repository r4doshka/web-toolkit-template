import Axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { store } from 'store';
import actions from 'store/actions';

export class Http {
  constructor(private readonly axios: AxiosInstance) {
    this.useInterceptors();
  }

  setLanguageHeader(lang: string): void {
    this.axios.defaults.headers['x-lang'] = lang;
  }

  setAuthorizationHeader(token: string): void {
    console.log('setAuthorizationHeader', token);
    this.axios.defaults.headers.Authorization = `Bearer ${token}`;
  }

  unsetAuthorizationHeader(): void {
    delete this.axios.defaults.headers.Authorization;
  }

  private useInterceptors(): void {
    this.axios.interceptors.response.use(
      (response: AxiosResponse): AxiosResponse => {
        return response.data;
      },
      (error: AxiosError): Promise<AxiosError> => {
        if (error.response?.status === 401) {
          store.dispatch(actions.authActions.signOut());
        }
        return Promise.reject(error);
      },
    );
  }

  get get() {
    return this.axios.get;
  }

  post<T, R>(path: string, payload: T): Promise<R> {
    return this.axios.post(path, payload);
  }

  get put() {
    return this.axios.put;
  }

  get patch() {
    return this.axios.patch;
  }

  get delete() {
    return this.axios.delete;
  }
}

export const http = new Http(
  Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  }),
);
