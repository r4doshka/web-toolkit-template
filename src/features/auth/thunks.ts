import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthCustomerDto, CustomerSigninBodyDto } from 'api/generated';
import { ExtraParamsThunkType } from 'store/types';

import { SignInValidationErrors } from './types';

export const signInAsync = createAsyncThunk<
  AuthCustomerDto,
  CustomerSigninBodyDto,
  ExtraParamsThunkType<SignInValidationErrors>
>('auth/signIn', async (userData: CustomerSigninBodyDto, { extra: { api }, rejectWithValue }) => {
  try {
    const { data } = await api.AuthApi.customersControllerSignIn(userData);
    return data;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.response.data);
  }
});

export const signUpAsync = createAsyncThunk<
  AuthCustomerDto,
  CustomerSigninBodyDto,
  ExtraParamsThunkType<SignInValidationErrors>
>('auth/signUp', async (userData: CustomerSigninBodyDto, { extra: { api }, rejectWithValue }) => {
  try {
    const { data } = await api.AuthApi.customersControllerSignUp(userData);
    return data;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.response.data);
  }
});
