import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import { SignUp } from './pages/signUp/signUp';
import { Login } from './pages/login/login';
import { Search } from './pages/search/search';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={SignUp}/>
        <Route path='/login' component={Login}/>
        <Route path='/search' component={Search}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
