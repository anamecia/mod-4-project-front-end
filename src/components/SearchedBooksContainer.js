import React from 'react'

import Book from './searchBook'

const SearchedBooksContainer = ({books, username}) => {


    return (
        <div className="ui divided three column grid">
           {books.map(book => <Book book={book} key={book.id}/>)}
        </div>
    )
}

export default SearchedBooksContainer