import React from 'react'

const SearchForm = ({ updateSearchTerm, searchByBookName }) => {
    return(
        <>
            <input type='text' placeholder='Title/Author' onChange={updateSearchTerm}/>
            <input type='submit' onClick={searchByBookName}/>
        </>
    )
}

export default SearchForm