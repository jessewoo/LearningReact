import React, { Component } from 'react';
// The glue between Redux and React (not developed in tantem, separate libraries)
import { connect } from 'react-redux'

// A Container is a component that is aware of the state contained in Redux
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    // console.log(this.props.books)
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// Key to this - has a state, and returns an object. Whatever object is returned, it will be available for this.props in BookList
// GLUE between React and Redux. VERY IMPORTANT **********
// Whenever our 'state' changes, it will re-render
function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // Inside of BookList. Have access, key is books, value is state.books - array of objects
  return {
    books: state.books
  };
}

// Connect takes a function and a component, and produces a container
export default connect(mapStateToProps)(BookList);
