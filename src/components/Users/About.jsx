import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import SpinnerLoad from "../Spinner";

function About(props) {
  const getPerson = async () => {
    let { person } = props.person.match.params;
    let res = await axios.get(`https://api.github.com/users/${person}`);
    return res.data;
  };
  let [state, setState] = useState({});
  useEffect(() => {
    (async () => {
      const persons = await getPerson();
      setState({ ...persons });
    })();
  }, []);
  let { person } = props.person.match.params;
  if (state.name) {
    return (
      <div>
        <h4>Name :{state.name || "None"}</h4>
        <h4>Company:{state.company || "None"}</h4>
        <h4> Blog :{state.blog || "None"}</h4>
        <h4>Bio: {state.bio || "None"}</h4>
        <h4>Type: {state.type || "None"}</h4>
        <h4>Followers: {state.followers || "None"}</h4>
      </div>
    );
  } else {
    return <SpinnerLoad></SpinnerLoad>;
  }
}

export default About;
