import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Books from './Books'

class BookShelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    moveBookToShelf: PropTypes.func.isRequired
  }

  render() {
    const { title, books, moveBookToShelf } = this.props
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{title}</h2>
        <div className='bookshelf-books'>
          <Books books={books} moveBookToShelf={moveBookToShelf} />
        </div>
      </div>
    )
  }
}

export default BookShelf
