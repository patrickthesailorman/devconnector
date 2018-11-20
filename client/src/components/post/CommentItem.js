import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../actions/postActions";

class CommentItem extends Component {
  render() {
    const { comment, postId, auth } = this.props;

    return <div />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
