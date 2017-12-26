import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class BookShelves extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    moveBookToShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, moveBookToShelf } = this.props
    return (
      <div className='list-books-content'>
        <BookShelf title='Currently Reading' books={
          books.filter((book) => book.shelf === 'currentlyReading')
        } moveBookToShelf={moveBookToShelf} />
        <BookShelf title='Want to Read' books={
          books.filter((book) => book.shelf === 'wantToRead')
        } moveBookToShelf={moveBookToShelf} />
        <BookShelf title='Read' books={
          books.filter((book) => book.shelf === 'read')
        } moveBookToShelf={moveBookToShelf} />
      </div>
    )
  }
}

export default BookShelves
