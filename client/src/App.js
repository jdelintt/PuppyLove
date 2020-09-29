import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Questionaire from "./pages/Questionaire/Questionaire";
import UserPage from "./pages/UserPage/UserPage";
import Nav from "./components/Nav/Nav";
import "./App.css";
import Footer from "./components/Footer"
import BackgroundCheck from "./pages/BackgroundCheck/BackgroundCheck";
import About from "./pages/About/About"

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={UserPage} />
          <Route exact path="/background" component={BackgroundCheck} />
          <Route exact path="/hang" component={Questionaire} />
          <Route exact path="/signup" component={Dashboard} />
        </Switch>
        <div id="bgOverlay"></div>
        <Footer />
        {/* style={{ position: absolute, bottom: 10 }} */}
      </Router>
    </>
  );
}

export default App;
