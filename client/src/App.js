import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Questionaire from "./pages/Questionaire/Questionaire";
import UserPage from "./pages/UserPage/index";
import Navbar from "./components/Nav/Nav";
import "./App.css";
import Footer from "./components/Footer";
import BackgroundCheck from "./pages/BackgroundCheck/BackgroundCheck";
import About from "./pages/About/About";
import CardExampleCardProfile from "../src/pages/UserPage/index";

import Card from "./components/Card/index";
import LoginPage from "./pages/Dashboard/LoginPage";

import PuppyVideo from "./pages/PuppyVideo/PuppyVideo";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dogsfill from "./pages/UserPage/Userlist";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/landingpage" component={LandingPage} />
          {/* <Route exact path="/about" component={About}/> */}
          <Route exact path="/UserPage" component={UserPage} />
          <Route exact path="/background" component={BackgroundCheck} />
          <Route exact path="/hang" component={Questionaire} />

          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/userinfo" component={Card} />

          <Route
            exact
            path="/signup"
            component={() => <Dashboard setUser={setUser} />}
          />
          <Route exact path="/video" component={PuppyVideo} />
          <Route exact path="/about" component={AboutUsPage} />

          <Route exact path="/userLIst" component={Dogsfill} />
          <Route exact path="/user" component={CardExampleCardProfile} />
        </Switch>

        <Footer />
        {/* style={{ position: absolute, bottom: 10 }} */}
      </Router>
    </>
  );
}

export default App;
