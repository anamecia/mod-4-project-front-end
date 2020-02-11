import React from 'react'

import Book from './Book'

const UserBooksContainer = ({books}) => {

    return (
        <div className="ui divided three column grid">
           {books.map(book => <Book book={book} key={book.id}/>)}
        </div>
    )
}

export default UserBooksContainer