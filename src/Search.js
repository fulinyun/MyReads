import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Books from './Books'

class Search extends Component {
  static propTypes = {
    moveBookToShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    const allowedQueries = [
      'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen',
      'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business',
      'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket',
      'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama',
      'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance',
      'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror',
      'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn',
      'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate',
      'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming',
      'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction',
      'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel',
      'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
    ]
    const updatedQuery = query.trim()
    if (allowedQueries.includes(query)) {
      BooksAPI.search(query).then((books) => {
        this.setState({
          query: updatedQuery,
          searchResults: books
        })
      })
    } else {
      this.setState({
        query: updatedQuery,
        searchResults: []
      })
    }
  }

  render() {
    const { moveBookToShelf } = this.props
    const { query, searchResults } = this.state
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
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
