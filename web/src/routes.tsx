import React, { lazy } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const CreatePoint = lazy(() => import("./pages/CreatePoint"));
const SuccessCreatePoint = lazy(() => import("./pages/SuccessCreatePoint"));

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={CreatePoint} path="/create-point" />
        <Route component={SuccessCreatePoint} path="/success-create-point" />
        <Route component={Home} path="*" exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
