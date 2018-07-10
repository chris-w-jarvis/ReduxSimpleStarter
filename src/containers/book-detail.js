import React, { Component } from 'react';
// redux boilerplate
import { connect } from 'react-redux';

class BookDetail extends Component {
  render () {

    // return early if no state yet (when clicked on the state will update
    // and then react re-renders)
    if (!this.props.book) {
      return (
        <div>Select a book to get started.</div>
      );
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

// whatever is returned shows up as props in BookList class, I think this is
// connecting actual redux app state to this component
// redux boilerplate
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

// redux boilerplate now we have connected component
export default connect(mapStateToProps)(BookDetail);
