import React, { Component } from 'react';

// Declares a new class, plain JS object
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return <input onChange = {event => console.log(event.target.value)}/>;
  }
}

export default SearchBar;
