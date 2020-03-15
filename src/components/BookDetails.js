
import React from 'react'
import { Link } from 'react-router-dom'

const BookDetails = ({ book }) => {
    return(
        <div className='book-details-container'>
            <Link to={`/userbooks/${book.id}`}>
                <div className='book-cover-container'>
                    <img src={book.image}/>
                </div>
                <h1>{book.title}</h1>
                <p>{book.authors && book.authors.join(', ')}</p>
            </Link>
        </div>
    )
}

export default BookDetails