import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelves from './BookShelves'

const Main = ({ books, moveBookToShelf }) => (
  <div className='list-books'>
    <div className='list-books-title'>
      <h1>MyReads</h1>
    </div>
    <BookShelves books={books} moveBookToShelf={moveBookToShelf} />
    <div className='open-search'>
      <Link to='/search'>Add a book</Link>
    </div>
  </div>
)

Main.propTypes = {
  books: PropTypes.array.isRequired,
  moveBookToShelf: PropTypes.func.isRequired
}

export default Main
