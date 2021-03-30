import { ResponsePayload, SignInPayload, SignUpPayload } from 'features/auth/types';
import { http } from 'services';

export const signIn = (payload: SignInPayload): Promise<ResponsePayload> => {
  return http.post('/sign-in', payload);
};

export const signUp = (payload: SignUpPayload): Promise<ResponsePayload> => {
  return http.post<SignUpPayload, ResponsePayload>('/sign-up', payload);
};
