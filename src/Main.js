import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelves from './BookShelves'

class Main extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    moveBookToShelf: PropTypes.func.isRequired
  }

  state = {
    books: []
  }

  componentDidMount() {
    const { books } = this.props
    this.setState({ books })
  }

  render() {
    const { books, moveBookToShelf } = this.props
    return (
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
  }
}

export default Main
