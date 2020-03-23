
import React from 'react'
import { Link } from 'react-router-dom'

const BookDetails = ({ reading }) => {
    return(
        <div className='book-details-container'>
            <Link to={`/userbooks/${reading.id}`} className='book-details'>
                <div className='book-cover-container'>
                    <img src={reading.book.image}/>
                </div>
                <h1>{reading.book.title}</h1>
                <p>{reading.book.authors && reading.book.authors.join(', ')}</p>
            </Link>
        </div>
    )
}

export default BookDetails