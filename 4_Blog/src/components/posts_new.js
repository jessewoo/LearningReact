import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

// Usually the form fields are in the Component level, but this time around it's pulling it into the Application level
class PostsNew extends Component {
  render() {
      const { fields: {title, categories, content}, handleSubmit } = this.props;
      // console.log(title);
      return (
        <form onSubmit={handleSubmit(this.props.createPost)}>
          <h3>Create A New Post</h3>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" {...title} />
          </div>
          <div className="form-group">
            <label>Categories</label>
            <input type="text" className="form-control" {...categories} />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea className="form-control" {...content}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>

        </form>
      );
  }
}

// reduxForm has the same components as CONNECT. ReduxForm only has one difference, it has a configuration object

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);
