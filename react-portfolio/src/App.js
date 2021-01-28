import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Body from "./components/Body";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={"/about"}>
            <AboutMe />
          </Route>
          <Route path={"/contact"}>
            <Contact />
          </Route>
          <Route path={"/portfolio"}>
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
