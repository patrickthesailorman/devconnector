import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "33a9d08b2bc372b6e5a6",
      clientSecret: "daf4887fbe313516830ba36ef06644eab6ea3b9d",
      count: 5,
      sort: "created: asc",
      repos: []
    };
  }
  render() {
    return (
      <div>
        <h1>TODO: PROFILE GITHUB</h1>
      </div>
    );
  }
}

export default ProfileGithub;
