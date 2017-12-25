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

  render() {
    const { books } = this.state
    return (
      <div className='app'>
        <Route path='/search' render={() => (
            <Search />
          )}
        />
        <Route exact path='/' render={() => (
            <Main books={books} />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
