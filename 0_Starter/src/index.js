import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDwhFzTsLiaC5jq-C8iVi3g94McwEe5bCc';

// Create a new component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'steph curry' }, videos => {
      this.setState({ videos });
      // this.setState({ videos:videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Put component's generated HTML into DOM
ReactDOM.render(<App />, document.querySelector('.container'));
