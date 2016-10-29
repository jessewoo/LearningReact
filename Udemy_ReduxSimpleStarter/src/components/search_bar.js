import React, { Component } from 'react';

// Class Component
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Surfboards' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => this.setState({ term: event.target.value })} />
        <br/>
      </div>
    );
  }

}

export default SearchBar;
