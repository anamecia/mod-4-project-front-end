import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import NavBar from './NavBar';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';

function App() {
  return (
    <div className="column">
      <div className="row">
        <NavBar />
      </div>
      <div className="row content-container">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signup' component={SignUpPage}/>
          <Route exact path='/signin' component={SignInPage}/>
          <Route component={props => <h1>404 - Page not found</h1>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
