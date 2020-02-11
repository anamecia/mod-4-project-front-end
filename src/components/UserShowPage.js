import React, { Component } from 'react';
import SearchedBookContainer from './SearchedBooksContainer'
import API from './API'
import UserBooksContainer from './UserBooksConteiner';

class  UserShowPage extends Component {

    state = {  
        books: []
    }

    componentDidMount = () => {
        if(this.props.username === null) {
            this.props.history.push('/signin')
        } else {
            API.getBooks().then(books => this.setState({books: books}))
        }
    }

    render() { 
        return (  
            <div>
                {this.props.searchedBooks
                ? <SearchedBookContainer books={this.props.searchedBooks} username={this.props.username}/>
                : <UserBooksContainer books={this.state.books} />}
            </div>
        );
    }
}
 
export default UserShowPage ;