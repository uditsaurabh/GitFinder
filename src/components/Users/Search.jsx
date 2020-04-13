import React, { useContext } from "react";

import GithubContext from "../../Context/github/githubContext";

function Search(props) {
  const context = useContext(GithubContext);
  console.log("this is searched context", context);
  return (
    <div>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          context.resetState();
          context.filterSearchPerson();
        }}
      >
        <input
          type="text"
          name="text"
          placeholder="Searching..."
          value={props.searchPerson}
          onChange={(e) => {
            console.log(e.target.value);
            context.updateSearchPerson(e.target.value);
          }}
        ></input>
        <input
          type="submit"
          value="Search"
          className="btn-dark btn btn-block"
        ></input>
      </form>
    </div>
  );
}

export default Search;
