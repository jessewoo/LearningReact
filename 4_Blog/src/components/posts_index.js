import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

// Refactor from a functional component to a class based component
class PostsIndex extends Component {
  componentWillMount() {
    console.log('Good time to call Action Creator to fetch posts')
  }


  render() {
      return (
        <div>List of blog posts</div>
      );
  }
}

export default PostsIndex;
