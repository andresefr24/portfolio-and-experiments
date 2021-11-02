import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./index";

export default function Router() {
  return (
    <BrowserRouter basename="/portfolio-and-experiments">
      <Switch>
        {routes.map(({ name, path, Component, children }) => {
          return !children ? (
            <Route path={path} exact key={name}>
              <Component />
            </Route>
          ) : (
            children.map(
              ({
                name: childrenName,
                path: childrenPath,
                Component: ChildrenComponent,
              }) => (
                <Route
                  key={`${name}-${childrenName}`}
                  path={`${path}${childrenPath}`}
                >
                  <ChildrenComponent />
                </Route>
              )
            )
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}
