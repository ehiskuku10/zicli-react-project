import React, { Component } from "react";
import Radium from "radium";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import {
  fetchAllTags,
  addNewTagToCaption
} from "../../Reducers/ApiInteractions";
import { toggleIcon } from "../../Reducers/Effects";
import { fetchTags } from "../../EndPoints.jsx";
// import $ from "jquery";

class AddTagsToCaptionForm extends Component {
  componentDidMount() {
    fetchTags().then(res => {
      let tags = res.data
        ? res.data.data.tags
        : [
            { id: 1, tags: "Something Sha" },
            { id: 2, tags: "Something Sha" },
            { id: 3, tags: "Something Sha" }
          ];
      // console.log(tags)
    this.props.fetchTagsHandler(tags);
    });
  }

  render() {
    let {
      postTagToCaptionHandler,
      setQ,
      tags,
      toggleIconHandler,
      isIconHandler,
      setParams
    } = this.props;

    const styles = {
      position: "relative",
      backgroundColor: "#fff",
      borderRadius: "5px",
      top: "30%",
      height: "50%",
      overflowX: "scroll"
    };

    return (
      <div onClick={(e) => e.stopPropagation()} style={styles} className="p-4 mx-auto caption-form">
        <form
          onSubmit={(e) => {
              e.preventDefault()
              postTagToCaptionHandler(setParams)
            }
          }
          className="h-100"
        >
          <div class="[ col-xs-12 col-sm-6 ]">
            <h3>Add Tags To Caption</h3>
            <hr />
            {tags.map((tag, index) => (
              <div key={index}>
                <input style={{ display: "none" }} type="radio" />
                <label
                  onClick={() => toggleIconHandler(index, tags, setQ)}
                  className="d-flex tags-label"
                >
                  {console.log(isIconHandler[index])}
                  <div className="tag-icon bg-primary p-3 rounded-left text-white  s-1">
                    <i
                      className={isIconHandler[index] ? "fa fa-check" : ""}
                    ></i>
                  </div>
                  <div className="d-flex pl-2 border s-2 w-50">{tag}</div>
                </label>
              </div>
            ))}

            <div className="d-flex justify-content-start w-100 my-3 mx-0">
              <input
                className="w-30 btn btn-warning text-white"
                type="submit"
                value="Add New"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.ApiInteractions.tags,
  isIconHandler: state.Effects.isIcon,
  setQ: state.Effects.setQuery,
  setParams: state.Effects.setParams
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  postTagToCaptionHandler: setParams => dispatch(addNewTagToCaption(setParams)),
  fetchTagsHandler: (tags) => dispatch(fetchAllTags(tags)),
  toggleIconHandler: (index, arr, parentIndex) =>
    dispatch(toggleIcon(index, arr, parentIndex))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Radium(AddTagsToCaptionForm)));

// padding: 1.3rem;
