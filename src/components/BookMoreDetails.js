import React, { useState, useEffect } from 'react'
import API from '../API'
import BookDetails from './BookDetails'
import UserReadingInfo from './UserReadingInfo'

const BookMoreDetails = ({ match, history }) => {

    const [reading, setReading] = useState(null)

    useEffect(() => {
        API.getReading(match.params.id)
        .then(reading => setReading(reading))
    },[])

   
    return(
        reading &&
        <div className='book-more-information'>
            <div className='book-and-reading-info'>
                <BookDetails reading={reading}/>
                <UserReadingInfo history={history} reading={reading}/>
            </div>
            <div className='more-details-container'>
                <h3>Description</h3>
                <p>{reading.book.description}</p>
            </div>
        </div>
    )
}

export default BookMoreDetails