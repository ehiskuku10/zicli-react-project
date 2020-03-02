import React from "react";
import Radium from "radium";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { showCaptionTagForm, hideBackDrop } from "../../../Reducers/Effects";

const Card = props => {
  const { showCaptionTagFormHandler, hideBackDropHandler, captions } = props;

  const styles = {
    height: "10rem",
    fontSize: ".8rem"
  };

  const content = captions
    ? captions.map(item => (
        <div
          style={styles}
          key={item.id}
          className="col-lg-2 col-md-3 col-sm-4 p-2 text-center"
        >
          <div className="d-flex caption-card justify-content-center rounded-lg card p-2 m-1 align-middle h-100">
            <div>{`${item.caption} !`}</div>
            <div className="mt-3 tag-link-wrapper">
              <Link
                onClick={e => {
                  e.preventDefault();
                  showCaptionTagFormHandler([true, item.id]);
                  hideBackDropHandler(false);
                }}
                className="tag-link"
              >
                Add Tag
              </Link>
            </div>
          </div>
        </div>
      ))
    : "";

  return content;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  showCaptionTagFormHandler: option => dispatch(showCaptionTagForm(option)),
  hideBackDropHandler: option => dispatch(hideBackDrop(option))
});

export default connect(null, mapDispatchToProps)(Radium(Card));
