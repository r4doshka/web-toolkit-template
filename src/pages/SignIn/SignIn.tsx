import { unwrapResult } from '@reduxjs/toolkit';
import { CustomerSigninBodyDto } from 'api/generated';
import { signInAsync } from 'features/auth/thunks';
import { AuthLayout } from 'layouts';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import { AppDispatch } from 'store/types';

interface LocationState {
  from: {
    pathname: string;
  };
}

type TSignIn = FC<Record<string, unknown>>;

export const SignIn: TSignIn = () => {
  const location = useLocation<LocationState>();
  const from = location?.state?.from || { from: { pathname: '/dashboard' } };
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  const handleSubmit = async (data: CustomerSigninBodyDto) => {
    try {
      const resultAction = await dispatch(signInAsync(data));
      console.log('resultAction', resultAction);
      const unwrap = unwrapResult(resultAction);
      setRedirectToReferrer(true);
      console.log('unwrap', unwrap);
    } catch (error) {
      console.log('handleSubmit error', error);
    }
  };

  return (
    <AuthLayout>
      <button onClick={() => handleSubmit({ email: 'test@gmail.com', password: 'testtest1' })}>sign in</button>
    </AuthLayout>
  );
};
