import React, { Component } from 'react';
import SearchedBookContainer from './SearchedBooksContainer'
import API from './API'
import UserBooksContainer from './UserBooksContainer';

class  UserShowPage extends Component {

    state = {  
        readBooks: [],
        wantToReadBooks: [],
        currentlyReadingBooks: []
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

    render() { 
        return (  
            <div>
                {this.props.searchedBooks
                ? <SearchedBookContainer 
                    books={this.props.searchedBooks} 
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