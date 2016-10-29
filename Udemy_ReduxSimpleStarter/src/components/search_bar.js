import React, { Component } from 'react';

// Class Component
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        <br/>
      </div>
    );
  }

  // Two function - set the state, fires off the callback function
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
