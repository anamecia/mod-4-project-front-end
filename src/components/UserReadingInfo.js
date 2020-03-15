import React, { useState, useEffect } from "react"
import API from "../API"

const UserReadingInfo = ({ reading }) => {

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

    return(
        <div className='reading-info-container'>
            <select value={status} onChange={handleChange}>
                    <option>Read</option>
                    <option>Want to read</option>
                    <option>Currently Reading</option>
                </select>
        </div>    
    )
}

export default UserReadingInfo