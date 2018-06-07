import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';
// App class, insertion 


// Use 'describe' to group together similar tests
// String - report narrow down what test failed or was successful, name of the component we are testing
// Fat arrow, function body. 2nd argument is a function
describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });


  // Use 'it' to test a single attribute of a targer
  it('show the correct text', () => {

  	// Use 'expect' to make an 'assertion' about a target, the thing you are testing
  	// 'assertion' - reasonable assertion that it should be there
    expect(component).to.exist;
  });
});
