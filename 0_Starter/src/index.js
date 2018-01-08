import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDwhFzTsLiaC5jq-C8iVi3g94McwEe5bCc';

// Create a new component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Put component's generated HTML into DOM
ReactDOM.render(<App />, document.querySelector('.container'));
