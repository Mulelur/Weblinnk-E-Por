import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AboutMe from "./pages/aboutMe";
import Contact from "./pages/contact";
import Expertise from "./pages/expertise";
import Hobbies from "./pages/hobbies";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/expertise" component={Expertise} />
        <Route path="/about-me" exact component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/hobbies" component={Hobbies} />
      </Switch>
    </Router>
  );
}
