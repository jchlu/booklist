import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {
    return !this.props.book ? (
      <div>Select a book to view extra information</div>
    ) : (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
        <div>This book has {this.props.book.pages} pages</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  book: state.activeBook
})

// const mapDispatchToProps = dispatch => bindActionCreators({ selectBook: selectBook}, dispatch)

export default connect(mapStateToProps /* , mapDispatchToProps */)(BookDetail)
