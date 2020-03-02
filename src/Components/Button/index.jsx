import React from "react";
import Radium from "radium";
import { showCaptionForm } from "../../Reducers/Effects.jsx";
import { hideBackDrop } from "../../Reducers/Effects.jsx";
import { connect } from "react-redux";

const Button = props => {
  const { showCaptionFormHandler, hideBackDropHandler, title } = props;
  const styles = {
    width: "90%",
    textAlign: "center"
  };

  return (
    <div style={styles} className="mx-auto">
      <button onClick={() => {
        showCaptionFormHandler();
        hideBackDropHandler();
      }} class="p-3 btn btn-success btn-md">
        {title}
      </button>
    </div>
  );
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  showCaptionFormHandler: (option = true) => dispatch(showCaptionForm(option)),
  hideBackDropHandler: (option = false) => dispatch(hideBackDrop(option))
});


export default connect(null, mapDispatchToProps) (Radium(Button));
