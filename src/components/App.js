import React from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './HomePage'
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
