import React, { Component } from 'react';
import BookContainer from './BooksContainer'
import API from './API'

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
                {<BookContainer searchedBooks={this.props.searchedBooks} books={this.state.books}/>}
            </div>
        );
    }
}
 
export default UserShowPage ;