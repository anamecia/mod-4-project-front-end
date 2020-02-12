import React from 'react'

import Book from './UsersBook'

const UserBooksContainer = ({readBooks, wantToReadBooks, currentlyReadingBooks }) => {

    
    return (
        <div className="ui divided three column grid">
            <h3 className='row'> Currently Reading </h3>
           {currentlyReadingBooks.map(book => <Book book={book.book} readingId={book.readingId} key={book.book.id} status={'Currently Reading'}/>)}
            <h3 className='row'> Want To Read </h3>
           {wantToReadBooks.map(book => <Book book={book.book} readingId={book.readingId} key={book.book.id} status={'Want to read'}/>)}
            <h3 className='row'> Read </h3>
           {readBooks.map(book => <Book book={book.book} readingId={book.readingId} key={book.book.id} status={'Read'}/>)}
        </div>
    )
}

export default UserBooksContainer