import React, { Component, PropTypes } from "react";
import Header from "./common/Header";
import { connect } from "react-redux";

class App extends Component {
  render() {
    console.log("loading", this.props.loading);
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  console.log("state", state.ajaxCallsInProgress);
  return {
    loading: state.ajaxCallsInProgress > 0
  };
};

export default connect(mapStateToProps, null)(App);
