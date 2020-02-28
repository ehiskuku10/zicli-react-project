import React from "react";
import { Link } from "react-router-dom"
import Radium from "radium"

const NavList = () => {

  const styles = {
    display: "flex",
    listStyle: "none",
    alignItems: "center",
    fontSize: ".8rem",
    // "@media (max-width: 725px)": {
    //   margin: "0 auto",
    //   height: "60%"
    // }
  };

  return (
    <div>
      <div class="mobile-btn">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul style={styles}>
        <li className="px-2">
          <Link
            to="/tags"
            className="btn btn-primary btn-md nav-btn text-default font-weight-bold"
          >
            View Tags
          </Link>
        </li>
        <li className="px-2">
          <Link className="btn btn-danger btn-md nav-btn text-default font-weight-bold">
            Create Tag
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Radium(NavList);
