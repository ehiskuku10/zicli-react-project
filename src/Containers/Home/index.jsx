import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import Backdrop from "../../Components/Backdrop";
import { connect } from "react-redux";
import { fetchAllCaptions } from "../../Reducers/ApiInteractions.jsx";
import AddCaptionForm from "../../Components/Backdrop/AddCaptionForm.jsx";
import AddTagsToCaptionForm from "../../Components/Backdrop/AddTagsToCaptionForm.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captions: []
    };
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllCaptionsHandler();
  }

  submit(e) {
    e.preventDefault();
    // console.log(e.target);
  }

  render() {
    let { isCaptionForm, isCaptionTagForm, captions } = this.props;
    let bckdrp = (
      <div>
        {isCaptionForm ? (
          <Backdrop>
            <AddCaptionForm />
          </Backdrop>
        ) : (
          ""
        )}
        {isCaptionTagForm ? (
          <Backdrop>
            <AddTagsToCaptionForm />
          </Backdrop>
        ) : (
          ""
        )}
      </div>
    );
    return (
      <div>
        {bckdrp}
        <Header />
        <Content captions={captions} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isCaptionForm: state.Effects.isCaptionForm,
  isCaptionTagForm: state.Effects.isCaptionTagForm,
  captions: state.ApiInteractions.captions
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchAllCaptionsHandler: () => dispatch(fetchAllCaptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
