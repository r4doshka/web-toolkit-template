import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { Services } from 'store/types';

import { ResponsePayload, SignInPayload, SignInValidationErrors, SignUpPayload } from './types';

export const signInAsync = createAsyncThunk<
  ResponsePayload,
  SignInPayload,
  {
    extra: Services;
    rejectValue: SignInValidationErrors;
  }
>('auth/signIn', async (userData: SignInPayload, { extra, rejectWithValue }) => {
  try {
    return await extra.api.auth.signIn(userData);
  } catch (err) {
    const error: AxiosError<SignInValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(await error.response.data);
  }
});

export const signUpAsync = createAsyncThunk<
  ResponsePayload,
  SignUpPayload,
  {
    extra: Services;
    rejectValue: SignInValidationErrors;
  }
>('auth/signUp', async (userData: SignUpPayload, { extra, rejectWithValue }) => {
  try {
    return await extra.api.auth.signUp(userData);
  } catch (err) {
    const error: AxiosError<SignInValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(await error.response.data);
  }
});
