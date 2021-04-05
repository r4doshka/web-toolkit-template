import { unwrapResult } from '@reduxjs/toolkit';
import { CustomerSigninBodyDto } from 'api/generated';
import { selectToken } from 'features/auth/selectors';
import { signInAsync } from 'features/auth/thunks';
import { AuthLayout } from 'layouts';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import { useAppDispatch } from 'store/reducers';

interface LocationState {
  from: {
    pathname: string;
  };
}

type TSignIn = FC<Record<string, unknown>>;

export const SignIn: TSignIn = () => {
  const isAuth = useSelector(selectToken);
  const location = useLocation<LocationState>();
  const from = location?.state?.from || { pathname: '/dashboard' };
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const dispatch = useAppDispatch();

  if (isAuth && from.pathname === '/dashboard') {
    return <Redirect to="/dashboard" />;
  }

  if (redirectToReferrer) {
    return <Redirect to={from.pathname} />;
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
      <button onClick={() => handleSubmit({ email: 'test@gmail.com', password: 'testtest' })}>sign in</button>
    </AuthLayout>
  );
};
