import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../pages/login";
import Recipes from "../pages/recipes";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/recipes" component={Recipes} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
