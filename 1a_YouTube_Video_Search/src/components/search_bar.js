import React, { Component } from 'react';

// Declares a new class, plain JS object
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Jesse' };
  }

  render() {
    return (
      <div>
        <input
          value={ this.state.term }
          onChange = {event => this.setState({ term: event.target.value })}/>
        <br/>Value of the input: { this.state.term }
      </div>
    );
  }
}

export default SearchBar;
