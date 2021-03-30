import { unwrapResult } from '@reduxjs/toolkit';
import { signUpAsync } from 'features/auth/thunks';
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

interface ISubmitProps {
  email: string;
  password: string;
}

type TSignUp = FC<Record<string, unknown>>;

export const SignUp: TSignUp = () => {
  const location = useLocation<LocationState>();
  const from = location?.state?.from || { from: { pathname: '/dashboard' } };
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  const handleSubmit = async (data: ISubmitProps) => {
    try {
      const resultAction = await dispatch(signUpAsync(data));
      const unwrap = unwrapResult(resultAction);
      setRedirectToReferrer(true);
      console.log('unwrap', unwrap);
    } catch (error) {
      console.log('resultAction error', error);
    }
  };

  return (
    <AuthLayout hasBackground>
      <button onClick={() => handleSubmit({ email: 'test@gmail.com', password: '1234' })}>sign up</button>
    </AuthLayout>
  );
};
