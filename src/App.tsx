import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/App.css";

import Home from "./pageComps/Home";
import Dashboard from "./pageComps/Dashboard";

function App() {
  return (
    <>
      <div>
        nav
        <a href="/">Home</a>
        <a href="/Dashboard">Dash</a>
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
