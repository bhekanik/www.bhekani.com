import React, { useReducer } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
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
        linkColor: action.payload.linkColor,
        boxShadow: action.payload.boxShadow
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(appReducer, {
    navbackgroundColor: "transparent",
    linkColor: "#e8e9eb",
    boxShadow: "none",
    page: "home"
  });

  return (
    <Context.Provider value={dispatch}>
      <div className="App">
        <Navbar
          navbackgroundColor={state.navBackgroundColor}
          linkColor={state.linkColor}
          boxShadow={state.boxShadow}
        />
        <Switch>
          <Route exact path="/" render={() => <Home page={state.page} />} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Context.Provider>
  );
};

export default App;
