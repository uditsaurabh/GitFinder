import React from "react";
import Spinner from "./spinner.gif";
function SpinnerLoad() {
  return (
    <>
      <img
        src={Spinner}
        alt="loading..."
        style={{ margin: "auto", display: "block", width: "200px" }}
      ></img>
    </>
  );
}

export default SpinnerLoad;
