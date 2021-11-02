import React from "react";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Experiment1 from "../pages/Experiment1";

const routes = [
  { name: "home", path: "/", Component: Home },
  { name: "about me", path: "/about", Component: AboutMe },
  {
    name: "experiments",
    path: "/experiments",
    Component: React.Fragment,
    children: [{ name: "experiment 1", path: "/1", Component: Experiment1 }],
  },
];

export default routes;
