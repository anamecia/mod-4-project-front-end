import React from 'react'
import search from '../images/search.svg'

const SearchForm = ({ updateSearchTerm, searchByBookName, searchTerm }) => {
    return(
        <div className='search-form-container'>
            <div className='ui input'>
            <input id='search-form' value={searchTerm} type='text' placeholder='Title/Author' onChange={updateSearchTerm}/>
            </div>
            <button id='search-btn' onClick={searchByBookName}><img id='magnifying-glass'src={search}/></button>
        </div>
    )
}

export default SearchForm