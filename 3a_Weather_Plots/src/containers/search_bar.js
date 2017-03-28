import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

export default class SearchBar extends Component {
  // Initialize the start state
  constructor(props) {
    super(props);

    // Start off with an empty string
    this.state = { term: '' }

    // 'this' is the instance of SearchBar, has a function called onInputChange
    // Bind that function to 'this', which is SearchBar. Replace it with the bound instance of that function
    // TAKE the existing function, bind it to 'this' and REPLACE the existing function with it. Overwriting this local method.
    this.onInputChange = this.onInputChange.bind(this)

  }

  onInputChange(event) {
    // console.log(event.target.value);

    // When it is called, 'this' won't be the search bar component but some mystery context
    // 'this' is NOT the actual component
    // This is a callback function, and the callback function references 'this', 'this' will have the incorrect context
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault()

    // We need to go and fetch weather data
  }

// Controlled field
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a 5 day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
