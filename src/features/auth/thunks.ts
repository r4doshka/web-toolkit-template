import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthCustomerDto, CustomerSigninBodyDto } from 'api/generated';
import { AxiosError } from 'axios';
import { Services } from 'store/types';

import { SignInValidationErrors, SignUpPayload } from './types';

export const signInAsync = createAsyncThunk<
  AuthCustomerDto,
  CustomerSigninBodyDto,
  {
    extra: { api: Services };
    rejectValue: SignInValidationErrors;
  }
>('auth/signIn', async (userData: CustomerSigninBodyDto, { extra: { api }, rejectWithValue }) => {
  try {
    const { data } = await api.AuthApi.customersControllerSignIn(userData);
    return data;
  } catch (err) {
    const error: AxiosError<SignInValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(await error.response.data);
  }
});

export const signUpAsync = createAsyncThunk<
  AuthCustomerDto,
  CustomerSigninBodyDto,
  {
    extra: { api: Services };
    rejectValue: SignInValidationErrors;
  }
>('auth/signUp', async (userData: SignUpPayload, { extra: { api }, rejectWithValue }) => {
  try {
    const { data } = await api.AuthApi.customersControllerSignUp(userData);
    return data;
  } catch (err) {
    const error: AxiosError<SignInValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(await error.response.data);
  }
});
