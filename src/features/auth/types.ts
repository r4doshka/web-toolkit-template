import { IUser } from 'types';

export interface AuthStore {
  token?: string | null;
  loading: 'idle' | 'pending';
  error: string | null | undefined | SerializedError;
  currentRequestId: string | null | undefined;
  email: string | null;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  email: string;
  password: string;
}

export interface SignInValidationErrors {
  message: string;
  statusCode: number;
}

export interface SerializedError {
  name?: string;
  message?: string;
  stack?: string;
  statusCode?: number;
}

export interface ResponsePayload {
  token: string;
  user: IUser;
}
