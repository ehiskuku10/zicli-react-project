import React from "react"
import Radium from "radium"

const Tag = (props) => {
  const styles = {
    width: "fit-content",
    borderRadius: "30px",
    margin: ".2rem .2rem",
    background: "grey",
    color: "#fff"
  }
  return (
    <div style={styles} className="border p-3 card">
      {props.tag}
    </div>
  )
}

export default Radium(Tag);