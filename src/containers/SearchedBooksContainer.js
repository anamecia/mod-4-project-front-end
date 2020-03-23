import React from 'react'

import SearchBook from '../components/SearchBook'

const SearchedBooksContainer = ({books, username}) => {


    return (
        <div className='search-books-container'>
           {books.map(book => <SearchBook book={book} key={book.id}/>)}
        </div>
    )
}

export default SearchedBooksContainer