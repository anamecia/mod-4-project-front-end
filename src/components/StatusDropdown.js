import React from 'react'

const StatusDropdown = ({ status, handleChange }) =>{
    return(
        <div>
            <select value={status} onChange={handleChange}>
                <option>Read</option>
                <option>Want to read</option>
                <option>Currently Reading</option>
            </select>
        </div> 
    )
}

export default StatusDropdown