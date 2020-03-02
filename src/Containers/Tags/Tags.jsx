import React, { Component } from "react";
import Tag from "./Tag.jsx";
import Radium from "radium";
import { fetchAllTags } from "../../Reducers/ApiInteractions.jsx"
import { connect } from "react-redux"

class Tags extends Component {
  componentDidMount() {
    this.props.fetchAllTagsHandler()
  }

  render() {
    const styles = {
      height: "auto",
      width: "70%",
      display: "flex",
      flexWrap: "wrap"
    };

    console.log("check", this.props.tags);

    return (
      <div style={styles}>
        {this.props.tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.ApiInteractions.tags
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllTagsHandler: () => dispatch(fetchAllTags)
})

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Tags));
