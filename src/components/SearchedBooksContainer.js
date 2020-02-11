import React, { Component } from 'react'

import Book from './Book'

const SearchedBooksContainer = ({books}) => {

    return (
        <div className="ui divided three column grid">
           {books.map(book => <Book book={book} key={book.id}/>)}
        </div>
    )
}

export default SearchedBooksContainer