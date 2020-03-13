import React, { useState, useEffect } from 'react'
import API from '../API'

const BookDetails = ({ match }) => {

    const [reading, setReading] = useState(null)

    useEffect(() => {
        API.getReadings(match.params.id)
        .then(reading => setReading(reading))
    },[])

    
    return(
        <div>
           
        </div>
    )
}

export default BookDetails