import React from 'react'

const baseUrl = 'http://localhost:3000/'
const booksUrl = baseUrl + 'books'


    const get = (url) => {
        return fetch(url)
        .then(resp => resp.json())
    }

    const getBooks = () => get(booksUrl)
    


export default { getBooks }