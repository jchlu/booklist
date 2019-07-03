import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectBook } from '../actions/'

const BookList = ({ books, selectBook }) => {
  const renderList = () => books.map(book => (
    <li
      key={book.title}
      onClick={() => selectBook(book)}
      className="list-group-item"
    >
      {book.title}
    </li>
  ))

  return <ul className="list-group col-sm-4">{renderList()}</ul>
}

const mapStateToProps = state => ({
  books: state.books
})

const mapDispatchToProps = dispatch => bindActionCreators({ selectBook: selectBook }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
