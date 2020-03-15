import React, { useState, useEffect } from "react"
import API from "../API"

const UserReadingInfo = ({ reading, history }) => {

    const [status, setStatus] = useState(reading.status)

    useEffect(() => patchCurrentStatus(), [status])

    const handleChange = (e) => {   
        setStatus(e.target.value)
    }

    const patchCurrentStatus = () => {
        const data={ reading:{
            status: status
            } 
        }
        API.patchStatus(data, reading.id)
    }

    const deleteReading = () => {
        API.deleteReading(reading.id)
        .then(() => history.push('/userbooks'))
    }

    return(
        <div className='reading-info-container'>
            <select value={status} onChange={handleChange}>
                <option>Read</option>
                <option>Want to read</option>
                <option>Currently Reading</option>
            </select>
            <p onClick={deleteReading}> Remove Book </p>
            
        </div>    
    )
}

export default UserReadingInfo