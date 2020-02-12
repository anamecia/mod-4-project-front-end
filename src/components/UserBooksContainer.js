import React from 'react'

import Book from './Book'

const UserBooksContainer = ({readBooks, wantToReadBooks, currentlyReadingBooks }) => {

    
    return (
        <div className="ui divided three column grid">
            <h3 className='row'> Currently Reading </h3>
           {currentlyReadingBooks.map(book => <Book book={book} key={book.id}/>)}
            <h3 className='row'> Want To Read </h3>
           {wantToReadBooks.map(book => <Book book={book} key={book.id}/>)}
            <h3 className='row'> Read </h3>
           {readBooks.map(book => <Book book={book} key={book.id}/>)}
           
        </div>
    )
}

export default UserBooksContainer