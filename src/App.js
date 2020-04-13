import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/Users/Users";
import Search from "./components/Users/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/Users/About";
import GithubState from "./Context/github/GithubState";

export default function App() {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return (
                  <>
                    <Search></Search>
                    <Users></Users>
                  </>
                );
              }}
            ></Route>
            <Route
              exact
              path="/about/:person"
              render={(props) => <About person={props} />}
            ></Route>
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
}
