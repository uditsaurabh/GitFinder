import {
  SEARCH_USERS,
  UPDATE_SEARCH_PERSON,
  FILTER_SEARCH_PERSON,
  RESET_DATA,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS: {
      console.log("the dispatch search action", action);
      return {
        ...state,
        persons: action.payload,
        completeData: action.payload,
      };
    }
    case UPDATE_SEARCH_PERSON: {
      console.log("the dispatch search action", action);
      return {
        ...state,
        searchedPerson: action.payload,
      };
    }
    case FILTER_SEARCH_PERSON: {
      let { persons, searchedPerson } = state;
      if (searchedPerson) {
        persons = searchedPerson
          ? persons.filter((person) => person.login.includes(searchedPerson))
          : (persons = state.completeData);
        return {
          ...state,
          persons,
        };
      } else {
        return state;
      }
    }
    case RESET_DATA: {
      return {
        ...state,
        persons: state.completeData,
      };
    }
    default:
      return state;
  }
};
