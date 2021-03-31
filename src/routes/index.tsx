import { PrivateRoute } from 'components';
import { Dashboard, ForgotPassword, SignIn, SignUp } from 'pages';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

const Routes = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Redirect from="/" to="/sign-in" exact />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default Routes;
