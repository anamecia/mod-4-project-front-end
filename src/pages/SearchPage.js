import React, {useState} from 'react'

import SearchedBookDetails from '../components/SearchedBookDetails'
import SearchedBooksContainer from '../containers/SearchedBooksContainer'

const SearchPage = ({ books, history }) => {

    const[selectedBook, setSelectedBook] = useState(null)

    const handleClick = (book) => {
        setSelectedBook(book)
    }
    return (
        <>
           {selectedBook 
            ? <SearchedBookDetails book={selectedBook} history={history}/>
            : <SearchedBooksContainer books={books} handleClick={handleClick}/>}
        </>
    )
}

export default SearchPage