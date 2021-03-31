import { http } from 'services/http';

import { CustomersApi } from './generated';

export const api = {
  AuthApi: new CustomersApi(undefined, process.env.REACT_APP_API_URL, http.axios),
};
