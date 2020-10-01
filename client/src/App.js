import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Questionaire from "./pages/Questionaire/Questionaire";
import UserPage from "./pages/UserPage/index";
import Navbar from "./components/Nav/Nav";
import "./App.css";
import Footer from "./components/Footer";
import Card from "./components/Card/index"
import LoginPage from "./pages/Dashboard/LoginPage"

function App() {
  return (
    <>
      <Router>
        
        <Navbar />
        <Switch>
          <Route exact path="/" component={UserPage} />
          <Route exact path="/hang" component={Questionaire} />
          <Route exact path="/signup" component={LoginPage} />
          <Route exact path = "/userinfo" component = {Card}/>
        </Switch>
       
        <Footer />
        {/* style={{ position: absolute, bottom: 10 }} */}
      </Router>
    </>
  );
}

export default App;
