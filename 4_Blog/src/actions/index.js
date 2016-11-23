// Reach out to get the list of blog post from API
// Created a ACTION CREATION to fetch our list of posts
import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=lkfjalfkdajlfkajlkjdaf';


export function fetchPosts() {
  const request = axios.get(`${ROOT_RUL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request

  };
}
