import "./Navbar.css";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ icon, title }) {
  return (
    <div className="Navbar">
      <h2 style={{ float: "left" }}>
        <i className={icon}>{title}</i>
      </h2>
      <Link to="/" style={NavStyle}>
        Home
      </Link>
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
