import React, { useState } from "react"
import SearchedBook from "./SearchedBook"
import StatusDropdown from "./StatusDropdown"
import API from "../API"
 

const SearchedBookDetails = ({ book, history }) => {
    const [status, setStatus] = useState('Read')

    const handleChange = (e) =>{
        setStatus(e.target.value)
    }

    const handleClick = () => {
        const  data = {book: {
            google_id: book.googleId,
            title: book.title,
            author: book.authors,
            image: book.image,
            description: book.description,
            genre: book.genres
            }
        }
        
        API.saveBook(data)
        .then(data => data.book_id && API.saveReading({reading:{status: status, book_id: data.book_id, user_id: data.user_id}}))
        .then(() => history.push('/userbooks'))
}
    return (
        <div className='book-more-information'>
            <div className='book-and-reading-info'>
                <SearchedBook book={book}/>
                <div className='reading-info-container'>
                    <StatusDropdown status={status} handleChange={handleChange}/>
                    <button onClick={handleClick}>Add Book</button>
                </div>
            </div>
            <div className='more-details-container'>
                <h3>Description</h3>
                <p>{book.description}</p>
            </div>  
        </div>
    )
}

export default SearchedBookDetails


 
 











