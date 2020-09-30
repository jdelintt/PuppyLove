import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Questionaire from "./pages/Questionaire/Questionaire";
import UserPage from './pages/UserPage/UserPage';
import Nav from "./components/Nav/Nav";
import BackgroundChk from "./pages/BackgroundChk/BackgroundChk";
import "./App.css";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={UserPage} />
          <Route exact path="/hang" component={Questionaire} />
          <Route exact path="/signup" component={Dashboard} />
          <Route exact path="/backgroundcheck" component={BackgroundChk} />
        </Switch>
        <div id="bgOverlay"></div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
