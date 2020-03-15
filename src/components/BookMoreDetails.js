import React, { useState, useEffect } from 'react'
import API from '../API'
import BookDetails from './BookDetails'
import UserReadingInfo from './UserReadingInfo'

const BookMoreDetails = ({ match }) => {

    const [reading, setReading] = useState(null)

    useEffect(() => {
        API.getReadings(match.params.id)
        .then(reading => setReading(reading))
    },[])

   
    return(
        reading &&
        <div>
           <BookDetails book={reading.book}/>
           <UserReadingInfo reading={reading}/>
           <div className='more-details-container'>
                <h3>Description</h3>
                <p>{reading.book.description}</p>
            </div>
        </div>
    )
}

export default BookMoreDetails