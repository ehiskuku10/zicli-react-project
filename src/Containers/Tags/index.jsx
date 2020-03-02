import React, { Component } from "react";
import Tags from "./Tags";
import TagNav from "./TagNav";
import { connect } from "react-redux";
import { FadeLoader } from "react-spinners";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 50px auto;
  border-color: red;
`;

class index extends Component {
  render() {
    let { hidePreloader } = this.props;
    return (
      <div>
        <div className="tag-header">All Tags</div>
        <TagNav />
        {hidePreloader
          ? < Tags {...this.props} />
          : <FadeLoader
            css={override}
            sizeUnit={"px"}
            width={20}
            height={10}
            color={"#456789"}
            loading={true}
          />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hidePreloader: state.Effects.hidePreloader
});

export default connect(mapStateToProps, null)(index);
