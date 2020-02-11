import React from 'react'

const BookDetails = ({book}) =>{
     return(
         <div>
            <img class='book-cover' src={book.image}/>
            <h1>{book.title}</h1>
            <p>{book.author && book.author.join(', ')}</p>
            <p>{book.description}</p>
        </div>
     )
}

export default BookDetails