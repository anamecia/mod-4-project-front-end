import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';


import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import API from './components/API';
import UserShowPage from './components/UserShowPage';

class  App extends Component{

  state = {
    username: null,
    searchTerm: '',
    searchedBooks: null
  }

  signIn = (data) => {
    this.setState({ username: data.username })
    localStorage.token = data.token
  }

  signOut = () => {
    this.setState({ username: null })
    localStorage.removeItem('token')
  }

  goToMyBooks = () => {
    if(this.state.username === null) {
      this.props.history.push('/signin')
    }else {
      this.setState({
        searchedBooks: null,
        searchTerm: ''
      })
    }
  }

  componentDidMount = () => {
    if(localStorage.token){
      API.validate()
      .then(data => {
        if (data.error) throw Error(data.error)
        this.signIn(data)
        this.props.history.push('/userbooks')
       
      })
      .catch(error => alert(error))
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

  render(){
    return (
      <div className='main-container'>
        <NavBar signOut={this.signOut} goToMyBooks={this.goToMyBooks} updateSearchTerm={this.updateSearchTerm} searchByBookName={this.searchByBookName} searchTerm={this.state.searchTerm}/>
        <div className="row content-container">
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/signin' component={props => <SignInPage {...props} signIn={this.signIn}/>}/>
            <Route exact path='/signup' component={props => <SignUpPage {...props} signIn={this.signIn}/>} />
            <Route exact path='/userbooks' component={props => <UserShowPage {...props} username={this.state.username}  searchTerm={this.state.searchTerm} searchedBooks={this.state.searchedBooks}/>}/>
            <Route component={props => <h1>404 - Page not found</h1>} />
          </Switch>
        </div>
      </div>
    );
  }
  
}

export default withRouter(App)
