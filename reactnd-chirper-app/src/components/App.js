import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loader from "react-redux-loading";

import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    return (
      <div>
        <Loader />
        <Dashboard />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ handleInitialData }, dispatch);

export default connect(null, mapDispatchToProps)(App);
