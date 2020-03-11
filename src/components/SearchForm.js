import React from 'react'

const SearchForm = ({ updateSearchTerm, searchByBookName, searchTerm }) => {
    return(
        <div className='search-form-container ui input'>
            <input value={searchTerm} type='text' placeholder='Title/Author' onChange={updateSearchTerm}/>
            <input type='submit' onClick={searchByBookName}/>
        </div>
    )
}

export default SearchForm