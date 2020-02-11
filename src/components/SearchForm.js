import React from 'react'

const SearchForm = ({ updateSearchTerm }) => {
    return(
        <>
            <input type='text' placeholder='Title/Author/Isbn' onChange={updateSearchTerm}/>
        </>
    )
}

export default SearchForm