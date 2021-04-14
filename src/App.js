import React from 'react'
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MyNav from './Components/Navbar/MyNav';
import Home from './Components/Home';

import Sport from './Components/Sport';
import Sport0 from './Pages/Part2/Sport0';
import Sport4 from './Pages/Part2/Sport4';
import Sport5 from './Pages/Part2/Sport5';
import Sport6 from './Pages/Part2/Sport6';

import Political from './Components/Political';
import Politic1 from './Pages/Part1/Politic1';
import Politic2 from './Pages/Part1/Politic2';
import Politic3 from './Pages/Part1/Politic3';
import Politic4 from './Pages/Part1/Politic4';
import Politic5 from './Pages/Part1/Politic5';
import Politic6 from './Pages/Part1/Politic6';

import Art from './Components/Art';
import Art1 from './Pages/art/Art1';
import Art2 from './Pages/art/Art2';
import Art3 from './Pages/art/Art3';
import Art4 from './Pages/art/Art4';
import Art5 from './Pages/art/Art5';
import Footfooter from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter basename="/almdar">
      <MyNav />
      <Switch>
        <Route exact path='/' component={ Home } />

        <Route path='/Political' component={ Political } />
        <Route path='/Politic1' component={ Politic1 } />
        <Route path='/Politic2' component={ Politic2 } />
        <Route path='/Politic3' component={ Politic3 } />
        <Route path='/Politic4' component={ Politic4 } />
        <Route path='/Politic5' component={ Politic5 } />
        <Route path='/Politic6' component={ Politic6 } />

        <Route path='/Sport' component={ Sport } />
        <Route path='/Sport0' component={ Sport0 } />
        <Route path='/Sport4' component={ Sport4 } />
        <Route path='/Sport5' component={ Sport5 } />
        <Route path='/Sport6' component={ Sport6 } />

        <Route path='/Art' component={ Art } />
        <Route path='/Art1' component={ Art1 } />
        <Route path='/Art2' component={ Art2 } />
        <Route path='/Art3' component={ Art3 } />
        <Route path='/Art4' component={ Art4 } />
        <Route path='/Art5' component={ Art5 } />
      </Switch>
      <Footfooter />
    </BrowserRouter>
  );
}

export default App;
