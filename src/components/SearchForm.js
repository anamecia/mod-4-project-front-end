import React from 'react'

const SearchForm = ({ updateSearchTerm, searchByBookName, searchTerm }) => {
    return(
        <>
            <input value={searchTerm} type='text' placeholder='Title/Author' onChange={updateSearchTerm}/>
            <input type='submit' onClick={searchByBookName}/>
        </>
    )
}

export default SearchForm