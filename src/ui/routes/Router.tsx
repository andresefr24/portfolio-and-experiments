import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./index";

export default function Router() {
  return (
    <BrowserRouter basename="/portfolio-and-experiments">
      <Switch>
        {routes.map(({ name, path, Component }) => (
          <Route path={path} exact key={name}>
            <Component />
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}
