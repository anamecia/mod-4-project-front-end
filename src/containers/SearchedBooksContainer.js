import React from 'react'
import SearchedBook from '../components/SearchedBook'

const SearchedBooksContainer = ({books, handleClick}) => {
    return (
        <div className='books-container'>
            {books.map(book => <SearchedBook book={book} key={book.id} handleClick={handleClick}/>)}
        </div>
    )
}

export default SearchedBooksContainer