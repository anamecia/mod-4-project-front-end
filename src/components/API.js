import React from 'react'

const baseUrl = 'http://localhost:3000/'
const bookUrl = baseUrl + 'books'
const readingsUrl = baseUrl + 'readings'
const userbooksUrl = baseUrl + 'userbooks'
const signInUrl = baseUrl + 'signin'
const validateUrl = baseUrl + 'validate'
const signUpUrl = baseUrl + 'signup'
const googleApiUrl = 'https://www.googleapis.com/books/v1/volumes?q='


    const get = (url) => 
        fetch(url)
        .then(resp => resp.json())

    
    const getwithauth = (url) =>
        fetch(url, {
            headers: {
            Authorization: localStorage.token
            }
        }).then(resp => resp.json()) 
    
    const post = (url, data) => 
        fetch(url, {
            method: 'POST',
            headers:{
                Authorization: localStorage.token,
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json())


    const signUp = (username, password, passwordConfirmation) => post(signUpUrl, {user: {username, password, password_confirmation: passwordConfirmation}})

    const getBooks = () => getwithauth(userbooksUrl)

    const signIn = (username, password) => post(signInUrl, { username, password })

    const validate  = () => getwithauth(validateUrl)

    const searchBook = (searchTerm) => get(googleApiUrl + searchTerm)

    const saveBook = (data) => post (bookUrl, data)

    const saveReading = (data) => post (readingsUrl,data)
      

export default { getBooks, signIn, validate, signUp, searchBook, saveBook, saveReading}