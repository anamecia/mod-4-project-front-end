import React from 'react'

import BookDetails from '../components/BookDetails'

const UserBooksContainer = ({readReadings, wantToReadReadings, currentlyReadingReadings }) => {

    
    return (
        <div className='books-main-container'>
            {currentlyReadingReadings.length > 0 &&
            <div>
                <h3> Currently Reading </h3>
                <div className='books-container'>
                    {currentlyReadingReadings.map(reading => <BookDetails reading={reading} key={reading.id}/>)}
                </div>
            </div>}
            {wantToReadReadings.length > 0 &&
            <div>
                <h3> Want To Read </h3>
                <div className='books-container'>
                    {wantToReadReadings.map(reading => <BookDetails reading={reading} key={reading.id}/>)}
                </div>
            </div>}
            {readReadings.length > 0 &&
            <div>
                <h3> Read </h3>
                <div className='books-container'>
                    {readReadings.map(reading => <BookDetails reading={reading} key={reading.id}/>)}
                </div>
            </div>}
        </div>
    )
}

export default UserBooksContainer