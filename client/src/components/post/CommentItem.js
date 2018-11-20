import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../actions/postActions";

class CommentItem extends Component {
  render() {
    return <div />;
  }
}

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
