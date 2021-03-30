import { createSlice } from '@reduxjs/toolkit';

import { signInAsync, signUpAsync } from './thunks';
import { AuthStore } from './types';

const initialState: AuthStore = {
  token: null,
  loading: 'idle',
  error: null,
  currentRequestId: undefined,
  email: null,
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    signUp: (state, action) => {
      state.token = action.payload;
    },
    signOut: () => initialState,
  },
  extraReducers: {
    [signInAsync.pending.type]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    },
    [signInAsync.fulfilled.type]: (state, action) => {
      state.loading = 'idle';
      state.currentRequestId = undefined;
      state.token = action.payload.token;
      state.email = action.payload.user.email;
    },
    [signInAsync.rejected.type]: (state, { payload }) => {
      state.loading = 'idle';
      if (payload) {
        state.error = { message: payload.message, statusCode: payload.statusCode };
      } else {
        state.error = payload.error;
      }
    },

    [signUpAsync.pending.type]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    },
    [signUpAsync.fulfilled.type]: (state, action) => {
      state.loading = 'idle';
      state.currentRequestId = undefined;
      state.token = action.payload.token;
      state.email = action.payload.user.email;
    },
    [signUpAsync.rejected.type]: (state, { payload }) => {
      state.loading = 'idle';
      if (payload) {
        state.error = { message: payload.message, statusCode: payload.statusCode };
      } else {
        state.error = payload.error;
      }
    },
  },
});

export const actions = {
  ...authSlice.actions,
};

export const { reducer } = authSlice;
