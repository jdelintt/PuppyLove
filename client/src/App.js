import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Questionaire from "./pages/Questionaire/Questionaire";
import UserPage from "./pages/UserPage/index";
import Navbar from "./components/Nav/Nav";
import "./App.css";
import Footer from "./components/Footer";
import BackgroundCheck from "./pages/BackgroundCheck/BackgroundCheck";
import CardExampleCardProfile from "../src/pages/UserPage/index";

import Card from "./components/Card/index";
import LoginPage from "./pages/Dashboard/LoginPage";
import PuppyVideo from "./pages/PuppyVideo/PuppyVideo";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dogsfill from "./pages/UserPage/Userlist";

import API from "./utils/API";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("id")) {
      API.getCurrentUser(JSON.parse(localStorage.getItem("id"))).then(
        ({ data }) => {
          console.log(data);
          setUser(data);
        }
      );
    } else {
    }
  }, []);

  useEffect(() => console.log(user), [user]);

  const handleLogout = () => {
    localStorage.removeItem("id");
    window.location.replace("/");
  };

  return (
    <>
      <Router>
        <Navbar logout={handleLogout} />
        <Switch>
          {!user ? (
            <>
              <Route exact path="/" component={LandingPage} />
              <Route
                exact
                path="/signup"
                component={() => <Dashboard setUser={setUser} />}
              />
            </>
          ) : (
            <>
              {/* <Route exact path="/about" component={About}/> */}

              <Route
                exact
                path="/userpage"
                component={() => <UserPage user={user} />}
              />
              <Route exact path="/background" component={BackgroundCheck} />
              <Route exact path="/hang" component={Questionaire} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/userinfo" component={Card} />
              <Route exact path="/video" component={PuppyVideo} />
              <Route exact path="/about" component={AboutUsPage} />
              <Route exact path="/userlist" component={Dogsfill} />
              <Route exact path="/user" component={CardExampleCardProfile} />
            </>
          )}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
