import React, { Component, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/Users/Users";
import axios from "axios";
import Search from "./components/Users/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/Users/About";

export default function App() {
  const [state, setState] = useState({});

  useEffect(() => {
    axios.get(`https://api.github.com/users`).then((res) => {
      const persons = res.data;
      const completeData = res.data;
      setState({ persons, completeData });
    });
  }, []);

  const updateSearchPerson = (e) => {
    let newState = { ...state };
    newState["searchPerson"] = e.target.value;
    setState(newState);
  };

  const filterSearchPerson = () => {
    console.log("App state is filter", state);
    let { persons, searchPerson } = state;
    persons = searchPerson
      ? persons.filter((person) => person.login.includes(searchPerson))
      : (persons = state.completeData);
    setState({ persons });
  };

  return (
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
                  <Search
                    updateSearchPerson={updateSearchPerson}
                    searchperson={state.searchPerson}
                    filterSearchPerson={filterSearchPerson}
                  ></Search>
                  <Users persons={state.persons}></Users>
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
  );
}
