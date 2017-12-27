import React from 'react'
import PropTypes from 'prop-types'
import Books from './Books'

const BookShelf = ({ title, books, moveBookToShelf }) => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{title}</h2>
    <div className='bookshelf-books'>
      <Books books={books} moveBookToShelf={moveBookToShelf} />
    </div>
  </div>
)

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  moveBookToShelf: PropTypes.func.isRequired
}

export default BookShelf
