import React, { Component } from 'react';

// Declares a new class, plain JS object
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="col-lg-12">
        <br/>
        <form>
          <div className="form-group">
            <input
              className="form-control"
              value={ this.state.term }
              onChange = {event => this.onInputChange(event.target.value )}/>
            <br/>
            <p className="text-info">Currently Searching for: { this.state.term }</p>
          </div>
        </form>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
