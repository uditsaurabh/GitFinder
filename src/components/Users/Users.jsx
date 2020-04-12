import React from "react";
import axios from "axios";
import UserItem from "./UserItem";
import SpinnerLoad from "../Spinner";

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default function Users(props) {
  if (props.persons) {
    let { persons } = props;
    const listItems = persons.map((person) => (
      <UserItem key={person.id} person={person}></UserItem>
    ));
    return <div style={userStyle}>{listItems}</div>;
  } else {
    return <SpinnerLoad></SpinnerLoad>;
  }
}
