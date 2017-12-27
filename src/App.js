import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Main from './Main'
import Search from './Search'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState({ books })
    )
  }

  moveBookToShelf = (book, shelf) => {
    const { books } = this.state
    const bookId = book.id
    let updatedBooks = books.filter((book) => book.id !== bookId)
    let updatedBook = book
    updatedBook.shelf = shelf
    updatedBooks.push(updatedBook)
    this.setState({
      books: updatedBooks
    })
    BooksAPI.update(book, shelf)
  }

  render() {
    const { books } = this.state
    return (
      <div className='app'>
        <Route
          path='/search'
          render={() => (
            <Search books={books} moveBookToShelf={this.moveBookToShelf} />
          )}
        />
        <Route
          exact path='/'
          render={() => (
            <Main books={books} moveBookToShelf={this.moveBookToShelf} />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
