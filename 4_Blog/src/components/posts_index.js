import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

// Refactor from a functional component to a class based component
class PostsIndex extends Component {
  componentWillMount() {
    // console.log('Good time to call Action Creator to fetch posts')
    this.props.fetchPosts();
  }
  render() {
      return (
        <div>
          <div className="text-xs-right">
            <Link to="/posts/new" className="btn btn-primary">
              Add a Post
            </Link>
          </div>
          List of blog posts
        </div>
      );
  }
}

export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
