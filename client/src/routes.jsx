// eslint-disable-next-line no-use-before-define
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;