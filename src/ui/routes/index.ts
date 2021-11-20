import React from "react";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Experiment1 from "../pages/experiments/Experiment1";
import Experiment2 from "../pages/experiments/Experiment2";

const routes = [
  { name: "home", path: "/", Component: Home },
  { name: "about me", path: "/about", Component: AboutMe },
  {
    name: "experiments",
    path: "/experiments",
    Component: React.Fragment,
    children: [
      { name: "experiment 1", path: "/1", Component: Experiment1 },
      { name: "experiment 2", path: "/2", Component: Experiment2 },
    ],
  },
];

export default routes;
