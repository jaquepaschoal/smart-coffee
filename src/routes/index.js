import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "../services/auth";

import Login from "../pages/login";
import Recipes from "../pages/recipes";
import Complements from "../pages/complements";
import Final from "../pages/final";

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
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/recipes" component={Recipes} />
        <PrivateRoute path="/complements" component={Complements} />
        <PrivateRoute path="/final" component={Final} />
        <Route path="*" component={() => <h1>Page not found.</h1>} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
