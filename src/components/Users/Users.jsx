import React, { useContext } from "react";
import UserItem from "./UserItem";
import SpinnerLoad from "../Spinner";
import GithubContext from "../../Context/github/githubContext";
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default function Users() {
  const context = useContext(GithubContext);
  if (context.persons) {
    let { persons } = context;
    const listItems = persons.map((person) => (
      <UserItem key={person.id} person={person}></UserItem>
    ));
    return <div style={userStyle}>{listItems}</div>;
  } else {
    return <SpinnerLoad></SpinnerLoad>;
  }
}
