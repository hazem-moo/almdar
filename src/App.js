import React from 'react'
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MyNav from './Components/Navbar/MyNav';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter basename="/almdar">
      <MyNav />
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/Face' component='https://www.facebook.com/hazem.mohamed.311/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
