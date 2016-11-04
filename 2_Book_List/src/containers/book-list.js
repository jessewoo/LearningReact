import React, { Component } from 'react';
// The glue between Redux and React (not developed in tantem, separate libraries)
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// Successfully hook up ActionCreator with container

// Connect action with booklist

// A Container is a component that is aware of the state contained in Redux
// First step - clicking on a book will trigger an action Creator
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
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

// Anything returned from this function will end up as props on the Booklist container.
// We are passing in key - selectBook, value - selectBook. Whatever is pass thru, the retun will be available in the container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers. If select Button is click, I want to make sure data is flow thru the dispatch function
  // Dispatch function receives all the action, spits them all back to reducers
  return bindActionCreators({selectBook: selectBook},dispatch)
}

// Promote BookList from a component to a container - it needs to know about this new dispatch method, select Book. Make it available as a prop
// Connect takes a function and a component, and produces a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
