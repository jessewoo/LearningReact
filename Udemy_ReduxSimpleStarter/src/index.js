import React from 'react';
import ReactDOM from 'react-dom';


// Create a new REACT component. This component should produce some HTML
// Declaring a variable, final variable that won't change
// JSX - dialect of JS, webpack/babel will transform it
// JSX gets turned into HTML
// Factory - this is a CLASS
// ES6 function syntax
const App = () => {
	return <div>Hi!</div>;
}


// Take this component's generated HTML and put on the DOM
// We passed a class, not an instance of a component
// Wrap it with JSX tags to create an instance
// Need a target container
ReactDOM.render(<App />, document.querySelector('.container'));
