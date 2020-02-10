import React, { Component } from 'react'

import API from './API'
import Book from './Book'
class BooksContainer extends Component {


    render(){
        return (
            <div className="ui divided three column grid">
                {this.props.books.map(book => <Book book={book} key={book.id}/>)}

            </div>
        )
    }
}

export default BooksContainer