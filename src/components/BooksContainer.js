import React, { Component } from 'react'

import Book from './Book'

const BooksContainer = ({books, searchedBooks}) => {

    return (
        <div className="ui divided three column grid">
            {searchedBooks
                ?searchedBooks.map(book => <Book book={book} key={book.id}/>)
                :books.map(book => <Book book={book} key={book.id}/>)}
        </div>
    )
}

export default BooksContainer