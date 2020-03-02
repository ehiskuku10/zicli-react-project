import React from "react";
import Radium from "radium";
import Cards from "./Cards.jsx";
import { connect } from "react-redux";
import Button from "../../../Components/Button";
import { FadeLoader } from "react-spinners";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 50px auto;
  border-color: red;
`;

const Content = props => {
  let { hidePreloader } = props;
  const styles = {
    height: "auto",
    paddingBottom: "5rem"
  };

  return (
    <div style={styles}>
      {hidePreloader ? (
        <Cards {...props} />
      ) : (
        <FadeLoader
          css={override}
          sizeUnit={"px"}
          width={20}
          height={10}
          color={"#456789"}
          loading={true}
        />
      )}

      <Button title="Add Caption" />
    </div>
  );
};

const mapStateToProps = state => ({
  hidePreloader: state.Effects.hidePreloader
});

export default connect(mapStateToProps, null)(Radium(Content));
