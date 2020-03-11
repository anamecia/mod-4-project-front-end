import React, { Component } from 'react';
import SearchedBookContainer from '../components/SearchedBooksContainer'
import API from '../API'
import UserBooksContainer from '../components/UserBooksContainer';
import SearchForm from '../components/SearchForm'


class  UserShowPage extends Component {

    state = {  
        readBooks: [],
        wantToReadBooks: [],
        currentlyReadingBooks: [],
        searchTerm: '',
        searchedBooks: null
    }

    componentDidMount = () => {
        if(this.props.username === null) {
            this.props.history.push('/signin')
        } else {
            API.getReadBooks().then(books => this.setState({readBooks: books}))
            API.getWantToReadBooks().then(books => this.setState({wantToReadBooks: books}))
            API.getCurrentlyReadingBooks().then(books => this.setState({currentlyReadingBooks: books}))
        }
    }

    updateSearchTerm = (e) => {
        this.setState({
          searchTerm: e.target.value 
        })
    }

    searchByBookName = () => {
        if(this.state.username === null) {
          this.props.history.push('/signin')
        }else {
          API.searchBook(this.state.searchTerm)
          .then(data => data.items.map((book) => {return{
            googleId: book.id,
            title: book.volumeInfo.title,
            description: book.volumeInfo.description,
            authors: book.volumeInfo.authors,
            image: book.volumeInfo.imageLinks.thumbnail || 'no image available ',
            genre: book.volumeInfo.categories}}))
            .then(bookList => this.setState({searchedBooks: bookList}))
          } 
    }

    render() { 
        return (  
            <div className='sub-container'>
                <SearchForm 
                    updateSearchTerm={this.updateSearchTerm} 
                    searchByBookName={this.searchByBookName} 
                    searchTerm={this.state.searchTerm}/>
                {this.state.searchedBooks
                ? <SearchedBookContainer 
                    books={this.state.searchedBooks} 
                    username={this.props.username}/>
                : <UserBooksContainer 
                    readBooks={this.state.readBooks} 
                    wantToReadBooks={this.state.wantToReadBooks}
                    currentlyReadingBooks={this.state.currentlyReadingBooks}
                />}
            </div>
        );
    }
}
 
export default UserShowPage ;