import React from "react";
import { Link } from "react-router-dom";
function UserItem(props) {
  let { login, avatar_url } = props.person;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      ></img>
      <h3>{login}</h3>
      <div>
        <Link to={`/about/${login}`} className="btn btn-sm btn-dark my-1">
          More
        </Link>
      </div>
    </div>
  );
}

export default UserItem;
