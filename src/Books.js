import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Books extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    moveBookToShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, moveBookToShelf } = this.props
    return (
      <ol className='books-grid'>
        {
          books.map((book) => (
            <li key={book.id}>
              <div className='book'>
                <div className='book-top'>
                  <div
                    className='book-cover'
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}></div>
                  <div className='book-shelf-changer'>
                    <select
                      value={book.shelf || 'none'}
                      onChange={(event) => moveBookToShelf(book, event.target.value)}>
                      <option value='moveTo' disabled>Move to...</option>
                      <option value='currentlyReading'>Currently Reading</option>
                      <option value='wantToRead'>Want to Read</option>
                      <option value='read'>Read</option>
                      <option value='none'>None</option>
                    </select>
                  </div>
                </div>
                <div className='book-title'>{book.title}</div>
                <div className='book-authors'>{book.authors && book.authors.join(', ')}</div>
              </div>
            </li>
          ))
        }
      </ol>
    )
  }
}

export default Books
