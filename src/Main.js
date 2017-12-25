import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class Main extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props

    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <BookShelf title='Currently Reading' books={
            books.filter((book) => book.shelf === 'currentlyReading')
          } />
          <BookShelf title='Want to Read' books={
            books.filter((book) => book.shelf === 'wantToRead')
          } />
          <BookShelf title='Read' books={
            books.filter((book) => book.shelf === 'read')
          } />
        </div>
        <div className='open-search'>
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Main
