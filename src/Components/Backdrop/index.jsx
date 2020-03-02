import React from "react";
import {
  hideBackDrop,
  showCaptionForm,
  showCaptionTagForm
} from "../../Reducers/Effects.jsx";
import { connect } from "react-redux";
import Radium from "radium";

const Backdrop = props => {
  let {
    hideBackDrop,
    hideBackDropHandler,
    showCaptionFormHandler,
    showCaptionTagFormHandler
  } = props;
  const styles = {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "fixed",
    width: "100vw",
    height: "100vh",
    zIndex: "1000",
    top: 0,
    left: 0,
    display: hideBackDrop ? "none" : "block"
  };

  return (
    <div
      onClick={e => {
        hideBackDropHandler();
        showCaptionFormHandler(false);
        showCaptionTagFormHandler([false, ""]);
      }}
      style={styles}
    >
      {props.children}
    </div>
  );
};

const mapStateToProps = state => ({
  hideBackDrop: state.Effects.hideBackDrop
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideBackDropHandler: (option = true) => dispatch(hideBackDrop(option)),
  showCaptionFormHandler: option => dispatch(showCaptionForm(option)),
  showCaptionTagFormHandler: option => dispatch(showCaptionTagForm(option))
});

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Backdrop));
