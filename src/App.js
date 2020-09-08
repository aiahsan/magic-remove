import React from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

import Home from './pages/home'
import Pricing from './pages/pricing'
import Contact_Us from "./pages/contactus";
import Api_section from "./pages/Apis";
import Blog from "./pages/blog";
import Tool from "./pages/tool";
import Upload from './pages/upload'
import BackgroundRemoverApi from './pages/backgroundRemovalApi';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BackAPI from "./pages/BackgroundApi";
import PSExtention from "./pages/PSExtention";
import Functionalities from "./pages/Functionalities";

function App() {
  return (
    <Router>
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/api">
            <Api_section />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/contactus">
            <Contact_Us />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/toolapi">
            <BackgroundRemoverApi />
          </Route>
        
          <Route path="/backgroundapi">
            <BackAPI />
          </Route>
          <Route path="/psextension">
            <PSExtention />
          </Route>
          <Route path="/functionalities">
            <Functionalities />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
        </Switch>
  </Router>
  );
}

export default App;
