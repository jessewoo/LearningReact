import React, { Component } from 'react';

export default class Search extends Component {
  // Need to construct the state
  constructor(props) {
    super(props);

    this.state = {term: '' };

    // Take the input function, bind it to this, replace existing function with it.
    // Ovewriting locate method
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    // console.log(event.target.value);
    // 'this' is the INCORRECT context after handoff
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  // If there is a callback that makes a reference to 'this', you need to bind it
  // Post request - enter > submit the form, normal HTML
  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}
