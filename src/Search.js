import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Debounce } from 'react-throttle'
import * as BooksAPI from './BooksAPI'
import Books from './Books'

class Search extends Component {
  static propTypes = {
    moveBookToShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    if (!query) {
      this.setState({
        query: '',
        searchResults: []
      })
    } else {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          this.setState({
            query,
            searchResults: []
          })
        } else {
          books.forEach((book) => {
            const userBook = this.props.books.find((bk) => bk.id === book.id)
            if (userBook) {
              book.shelf = userBook.shelf
            } else {
              book.shelf = 'none'
            }
          })
          this.setState({
            query,
            searchResults: books
          })
        }
      })
    }
  }

  render() {
    const { moveBookToShelf } = this.props
    const { searchResults } = this.state
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>Close</Link>
          <div className='search-books-input-wrapper'>
            <Debounce time='400' handler='onChange'>
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <Books books={searchResults} moveBookToShelf={moveBookToShelf} />
        </div>
      </div>
    )
  }
}

export default Search
