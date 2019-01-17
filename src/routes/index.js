import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../pages/login";
import Recipes from "../pages/recipes";
import Complements from "../pages/complements";
import Final from "../pages/final";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/complements" component={Complements} />
        <Route path="/final" component={Final} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
