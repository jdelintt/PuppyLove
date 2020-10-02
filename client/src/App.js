import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Questionaire from "./pages/Questionaire/Questionaire";
import UserPage from "./pages/UserPage/index";
import Navbar from "./components/Nav/Nav";
import "./App.css";
import Footer from "./components/Footer"
import BackgroundCheck from "./pages/BackgroundCheck/BackgroundCheck";
import About from "./pages/About/About"

import Card from "./components/Card/index"
import LoginPage from "./pages/Dashboard/LoginPage"

import PuppyVideo from "./pages/PuppyVideo/PuppyVideo";
import Card2 from "./components/Card/UserDogs"
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage"
import LandingPage from "./pages/LandingPage/LandingPage"

function App() {
  return (
    <>
      <Router>
        
        <Navbar />
        <Switch>
          <Route exact path = "/landingpage" component = {LandingPage}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/" component={UserPage} />
          <Route exact path="/background" component={BackgroundCheck} />
          <Route exact path="/hang" component={Questionaire} />

          <Route exact path="/signup" component={LoginPage} />
          <Route exact path = "/userinfo" component = {Card}/>

          <Route exact path="/signup" component={Dashboard} />
          <Route exact path="/video" component={PuppyVideo} />
          <Route exact path="/UserDogs" component={AboutUsPage}/>

        </Switch>
       
        <Footer />
        {/* style={{ position: absolute, bottom: 10 }} */}
      </Router>
    </>
  );
}

export default App;
