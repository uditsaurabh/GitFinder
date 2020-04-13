import "./Navbar.css";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Route } from "react-router-dom";
import GithubContext from "../Context/github/githubContext";
function Navbar({ icon, title }) {
  const context = useContext(GithubContext);
  return (
    <div className="Navbar">
      <h2 style={{ float: "left" }}>
        <i className={icon}>{title}</i>
      </h2>
      <Route
        render={({ history }) => (
          <a
            style={{ float: "right" }}
            type="button"
            onClick={() => {
              context.resetState();
              history.push("/");
            }}
          >
            Home
          </a>
        )}
      />
    </div>
  );
}
const NavStyle = { float: "right", margin: "2%" };

Navbar.defaultProps = {
  title: "GitHubFinder",
  icon: "fab fa-github",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
