import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import NavBar from './NavBar';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import BooksContainer from './BooksContainer';
import API from './API';

class  App extends Component{

  state = {
    username: null
  }

  signIn = (data) => {
    this.setState({ username: data.username })
    localStorage.token = data.token
  }

  signOut = () => {
    this.setState({ username: null })
    localStorage.removeItem('token')
  }

  componentDidMount = () => {
    if(localStorage.token){
      API.validate()
      .then(data => {
        if (data.error) throw Error(data.error)
        this.signIn(data)
       
      })
      .catch(error => alert(error))
    }
  }

  render(){
    return (
      <div className="column ">
        <div id="navbar" className="ui grid">
          <NavBar signOut={this.signOut}/>
        </div>
        <div className="row content-container">
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/signin' component={props => <SignInPage {...props} signIn={this.signIn}/>}/>
            <Route exact path='/signup' component={props => <SignUpPage {...props} signIn={this.signIn}/>} />
            <Route exact path='/books' component={BooksContainer}/>
            <Route component={props => <h1>404 - Page not found</h1>} />
          </Switch>
        </div>
      </div>
    );
  }
  
}

export default App;
