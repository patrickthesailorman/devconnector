import React, { Component } from "react";
import PropTypes from "prop-types";

class CommentFeed extends Component {
  render() {
    const { comments,postId } = this.props;

    return (
      
    ) 
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired
};

export default CommentFeed;
