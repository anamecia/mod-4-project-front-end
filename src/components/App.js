import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import NavBar from './NavBar';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import BooksContainer from './BooksContainer';

function App() {
  return (
    <div className="column ">
      <div id="navbar" className="ui grid">
        <NavBar />
      </div>
      <div className="row content-container">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signup' component={SignUpPage}/>
          <Route exact path='/signin' component={SignInPage}/>
          <Route exact path='/books' component={BooksContainer}/>
          <Route component={props => <h1>404 - Page not found</h1>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
