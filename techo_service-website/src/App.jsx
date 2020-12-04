import React from "react";
import Home from "./Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import './Index.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./NavBar";

const App = () => {
  return (
    <>
    <Navbar/>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/services" exact component={Service} />
          <Redirect to ='/'/>
        </Switch>
      </Router>
    </>
  );
};

export default App;
