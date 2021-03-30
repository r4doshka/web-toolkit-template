import { selectToken } from 'features/auth/selectors';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

type IProps = FC<
  {
    component: FC;
  } & RouteProps
>;

export const PrivateRoute: IProps = ({ component: Component, ...rest }) => {
  const isAuth = useSelector(selectToken);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
