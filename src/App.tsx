import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/App.css";

import Home from "./pageComps/Home";
import Dashboard from "./pageComps/Dashboard";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
      <Nav />
    </>
  );
}

export default App;
