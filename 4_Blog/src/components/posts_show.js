import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    // console.log(this.props.post);
    const { post } = this.props;
    // const post = this.props.post;

    if (!post) {
      return <div>loading...</div>
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button
          className="btn btn-danger"
          onClick={this.onDeleteClick.bind(this)}>
        Delete Post</button>
        <h3>{post.title}</h3>
        <p>{post.categories}</p>
        <p>{post.content}</p>
      </div>

    );
  }
}

function mapStateToProps(state){
  return {
    post: state.posts.post
  };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
