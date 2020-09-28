import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from "./pages/UserPage"
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper"
// import Card from "./components/Card"





function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Wrapper>
      <Route exact path="/UserPage" component={User} />
      </Wrapper>
    </div>
    </Router>
  );
}

export default App;
