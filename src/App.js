import React from 'react';
import './App.css';

import Menu from './Components/Menu/Menu';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ListArticles from './Components/ListArticles/ListArticles';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Menu />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/" exact component={ListArticles} />
    </div>
  );
}

export default App;
