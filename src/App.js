import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from 'react-router-dom';

const App = () => (
  <div>
    <div><Navigation /></div>
    
    {/* <Route exact path="/" exact component = {Home}/>

    <Route path="/About" component = {About}/>
      
    
    <Route path="/Contact" component = {Contact}/> */}

    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/Home">
      <Home/>
    </Route>
    <Route path ="/About">
      <Home/>
    </Route>
  </div>
);

export default App;
