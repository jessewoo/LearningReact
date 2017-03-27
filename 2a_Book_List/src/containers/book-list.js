import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			);
		});
	}

	render() {
		console.log(this.props.books)
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

// Takes in application STATE, return an object. Whatever gets returned will be available in the Component under this.props.books. It is the GLUE
function mapStateToProps(state) {
	// Whatever is returned will show up as props, inside of BookList
	return {
		books: state.books
	};
}

// selectBook is the ActionCreator we imported up top
// Anything returned from this function will end up as props on the BookList container
// Whatever is PASSED in, will be available as props in the container
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed to all reducers
	// Make sure it flows thru the 'dispatch' function
	// dispatch function receives all the actions and spits them all out to the reducers
	return bindActionCreators( { selectBook: selectBook }, dispatch )
}



// Make use of connect function. Connect function take the mapStatetoProps function and a component, and return/produces a container. A container is a component AWARE of the state
// Promote BookList froma  component to a container - it needs to know about this new dispatch method: selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
