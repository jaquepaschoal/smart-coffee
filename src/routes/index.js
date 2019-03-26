import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { isAuthenticated } from "../services/auth";

import Login from "../pages/login";
import Recipes from "../pages/recipes";
import Complements from "../pages/complements";
import Final from "../pages/final";
import history from "./history";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <ConnectedRouter history={history}>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/recipes" component={Recipes} />
        <PrivateRoute path="/complements" component={Complements} />
        <PrivateRoute path="/final" component={Final} />
        <Route path="*" component={() => <h1>Page not found.</h1>} />
      </Switch>
    </Fragment>
  </ConnectedRouter>
);

export default Routes;
