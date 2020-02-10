import React, { Component } from 'react'

import API from './API'
import Book from './Book'

class BooksContainer extends Component {

    state = {
        books: []
    }

    componentDidMount = () => {
        API.getBooks()
        .then(booksList => this.setState({books:booksList }))
    }

    render(){
        return (
            <div className="ui divided three column grid">
                {this.state.books.map(book => <Book book={book} key={book.id}/>)}
            </div>
        )
    }
}

export default BooksContainer