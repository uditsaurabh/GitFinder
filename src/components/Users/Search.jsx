import React from "react";

function Search(props) {
  return (
    <div>
      <form
        className="form"
        onSubmit={(e) => {
          console.log(props);
          e.preventDefault();
          console.log("search props", props);
          props.filterSearchPerson();
        }}
      >
        <input
          type="text"
          name="text"
          placeholder="Searching..."
          value={props.searchPerson}
          onChange={(e) => {
            props.updateSearchPerson(e);
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
