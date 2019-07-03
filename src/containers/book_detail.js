import React from 'react'
import { connect } from 'react-redux'

const BookDetail = ({ book }) => !book ? (
      <div>Select a book to view extra information</div>
    ) : (
      <div>
        <h3>Details for:</h3>
        <div>{book.title}</div>
        <div>This book has {book.pages} pages</div>
      </div>
    )

const mapStateToProps = state => ({
  book: state.activeBook
})

export default connect(mapStateToProps /* , mapDispatchToProps */)(BookDetail)
