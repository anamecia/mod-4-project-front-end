import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Style from './App.css'
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import API from './API';
import UserShowPage from './pages/UserShowPage';
import BookDetails from './components/BookDetails'

class  App extends Component{

  state = {
    username: null,

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

  render(){
    return (
      <div className='main-container'>
        <NavBar signOut={this.signOut} goToMyBooks={this.goToMyBooks}/>
       
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signin' component={props => <SignInPage {...props} signIn={this.signIn}/>}/>
          <Route exact path='/signup' component={props => <SignUpPage {...props} signIn={this.signIn}/>} />
          <Route exact path='/userbooks' component={props => <UserShowPage {...props} username={this.state.username} />}/>
          <Route path= '/userbooks/:id' component={BookDetails}/>
          <Route component={props => <h1>404 - Page not found</h1>} />
        </Switch>
       
      </div>
    );
  }
  
}

export default withRouter(App)
