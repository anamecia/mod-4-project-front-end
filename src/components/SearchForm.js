import React from 'react'

const SearchForm = ({ updateSearchTerm, searchByBookName }) => {
    return(
        <>
            <input id='search-form' type='text' placeholder='Title/Author' onChange={updateSearchTerm}/>
            <input type='submit' onClick={searchByBookName}/>
        </>
    )
}

export default SearchForm