import React from "react";
import Radium from "radium"

const TagNav = () => {
  const styles = {
    marginBottom: "3rem"

  }
  return (
    <div style={styles}>
      <ul className="d-flex">
        <li>All Tags</li>
        <li>Random Tags</li>
      </ul>
    </div>
  );
};

export default Radium(TagNav);
