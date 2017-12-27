import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

const BookShelves = ({ books, moveBookToShelf }) => (
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

BookShelves.propTypes = {
  books: PropTypes.array.isRequired,
  moveBookToShelf: PropTypes.func.isRequired
}

export default BookShelves
