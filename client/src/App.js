import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Questionaire from "./pages/Questionaire/Questionaire";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/hang" component={Questionaire} />
        </Switch>
        <div id="bgOverlay"></div>
      </Router>
    </>
  );
}

export default App;
