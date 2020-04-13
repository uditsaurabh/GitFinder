import React, { useReducer, useEffect } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./GithubReducer";
import {
  SEARCH_USERS,
  UPDATE_SEARCH_PERSON,
  FILTER_SEARCH_PERSON,
  RESET_DATA,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    persons: [],
    completeData: [],
    searchedPerson: null,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  useEffect(() => {
    (async () => {
      const res = await axios.get(`https://api.github.com/users`);
      dispatch({
        type: SEARCH_USERS,
        payload: res.data,
      });
    })();
  }, []);

  const updateSearchPerson = (e) => {
    dispatch({ type: UPDATE_SEARCH_PERSON, payload: e });
  };

  const filterSearchPerson = () => {
    dispatch({ type: FILTER_SEARCH_PERSON });
  };

  const resetState = () => {
    dispatch({ type: RESET_DATA });
  };

  return (
    <GithubContext.Provider
      value={{
        persons: state.persons,
        completeData: state.completeData,
        searchedPerson: state.searchedPerson,
        updateSearchPerson,
        filterSearchPerson,
        resetState,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
