import React from 'react'

const SearchedBook = ({ book, handleClick }) => {

    return (
        <>
            <div onClick={() => handleClick(book)} className='book-details-container'>
                <div className='book-details'>
                    <div className='book-cover-container'>
                        <img src={book.image}/>
                    </div>
                    <h1>{book.title}</h1>
                    <p>{book.authors && book.authors.join(', ')}</p>
                </div>
            </div>
        </>
    )
}

export default SearchedBook