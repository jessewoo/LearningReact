import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDwhFzTsLiaC5jq-C8iVi3g94McwEe5bCc';

YTSearch({key: API_KEY, term: 'golden state warriors'}, function(data) {
  console.log(data)
})

// Create a new component. This component should produce some HTML
// This is a functional component since it doesn't have to deal with STATE
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML, put it on the page (in the DOM)
// Need to import React Library
ReactDOM.render(<App />, document.querySelector('.container'));
