import React, { useReducer } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Success from "./components/Contact/Success/Success";
import Footer from "./components/Footer/Footer";

import "./App.css";

export const Context = React.createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case "page":
      return {
        ...state,
        page: action.payload
      };
    case "nav":
      return {
        ...state,
        navBackgroundColor: action.payload.navBackgroundColor,
        homeLinkColor: action.payload.homeLinkColor,
        aboutLinkColor: action.payload.aboutLinkColor,
        projectsLinkColor: action.payload.projectsLinkColor,
        contactLinkColor: action.payload.contactLinkColor,
        boxShadow: action.payload.boxShadow
      };
    case "homeLink":
      return {
        ...state,
        homeLinkColor: action.payload.linkColor
      };
    case "aboutLink":
      return {
        ...state,
        aboutLinkColor: action.payload.linkColor
      };
    case "projectsLink":
      return {
        ...state,
        projectsLinkColor: action.payload.linkColor
      };
    case "contactLink":
      return {
        ...state,
        contactLinkColor: action.payload.linkColor
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(appReducer, {
    navbackgroundColor: "rgba(0,0,0,0.3)",
    homeLinkColor: "#e8e9eb",
    aboutLinkColor: "#e8e9eb",
    projectsLinkColor: "#e8e9eb",
    contactLinkColor: "#e8e9eb",
    boxShadow: "none",
    page: "home",
  });

  return (
    <Context.Provider value={dispatch}>
      <div className="App">
        <Navbar
          navbackgroundColor={state.navBackgroundColor}
          homeLinkColor={state.homeLinkColor}
          aboutLinkColor={state.aboutLinkColor}
          projectsLinkColor={state.projectsLinkColor}
          contactLinkColor={state.contactLinkColor}
          boxShadow={state.boxShadow}
          page={state.page}
        />
        <Switch>
          <Route exact path="/" render={() => <Home page={state.page} />} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/success" component={Success} />
        </Switch>
        <Footer />
      </div>
    </Context.Provider>
  );
};

export default App;
