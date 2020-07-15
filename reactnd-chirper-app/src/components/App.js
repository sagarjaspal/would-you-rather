import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    return <div>Starter Code</div>;
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ handleInitialData }, dispatch);

export default connect(null, mapDispatchToProps)(App);
