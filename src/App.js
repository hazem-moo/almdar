import React from 'react'
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MyNav from './Components/Navbar/MyNav';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter basename="/almanar">
      <MyNav />
      <Switch>
        <Route exact path='/' component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
