import React, { Component } from 'react';
import API from '../API'
import UserBooksContainer from '../containers/UserBooksContainer';
import SearchForm from '../components/SearchForm'
import SearchPage from './SearchPage';


class  UserShowPage extends Component {

    state = {  
        readings: [],
        searchTerm: '',
        searchedBooks: null
    }

    componentDidMount = () => {
        if(this.props.username === null) {
            this.props.history.push('/signin')
        } else {
            API.getUserReadings().then(readings => this.setState({ readings }))
        }
    }

    filterReadReadings = () => this.state.readings.filter(reading => reading.status === 'Read')
    
    filterWantToReadReadings = () => this.state.readings.filter(reading => reading.status === 'Want to read')

    filterCurrentlyReadingReadings = () => this.state.readings.filter(reading => reading.status === 'Currently Reading')


    updateSearchTerm = (e) => {
        this.setState({
          searchTerm: e.target.value 
        })
    }

    searchByBookName = () => {
          API.searchBook(this.state.searchTerm)
          .then(data => data.items.map((book) => {return{
                googleId: book.id,
                title: book.volumeInfo.title,
                description: book.volumeInfo.description,
                authors: book.volumeInfo.authors,
                image: book.volumeInfo.imageLinks.thumbnail,
                genre: book.volumeInfo.categories}}))
            .then(bookList => this.setState({searchedBooks: bookList}))
    }

    render() { 
        const readReadings = this.filterReadReadings()
        const wantToReadReadings = this.filterWantToReadReadings()
        const currentlyReadingReadings = this.filterCurrentlyReadingReadings()
        return (  
            <div className='sub-container'>
                <SearchForm 
                    updateSearchTerm={this.updateSearchTerm} 
                    searchByBookName={this.searchByBookName} 
                    searchTerm={this.state.searchTerm}/>
                {this.state.searchedBooks
                ? <SearchPage 
                    {...this.props} 
                    books={this.state.searchedBooks}/>
                : <UserBooksContainer 
                    readReadings={readReadings} 
                    wantToReadReadings={wantToReadReadings}
                    currentlyReadingReadings={currentlyReadingReadings}
                />}
            </div>
        );
    }
}
 
export default UserShowPage ;