import React from 'react'

import SearchBook from '../components/SearchBook'

const SearchedBooksContainer = ({books, username}) => {


    return (
        <div className="ui divided three column grid">
           {books.map(book => <SearchBook book={book} key={book.id}/>)}
        </div>
    )
}

export default SearchedBooksContainer