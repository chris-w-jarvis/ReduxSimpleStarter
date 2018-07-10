import React, { Component } from 'react';
import { connect } from 'react-redux';
// note: this is just redux
import { bindActionCreators } from 'redux';

// remember es6 shortcut
import { selectBook } from '../actions/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      // due to mapDispatchToProps below, selectBook is in our props
      return (
        <li key={book.title}
        className="list-group-item"
        onClick={() => this.props.selectBook(book)}
        >{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}
    </ul>
    );
  }
}

// whatever is returned shows up as props in BookList class
function mapStateToProps (state) {
  return {
    books: state.books,
  };
}

// redux uses to flow action events thru reducers (and sends them
// to props on BookList container)
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all
  // of our reducers, dispatch is the funnel that catches all the actions
  // selectBook is the action we are wiring to this container
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from component to container, needs to know about
// dispatch method selectBook, make it available as a prop
// LOOK AT REDUX DOCS FOR MORE ON CONNECT, this is most common use
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
