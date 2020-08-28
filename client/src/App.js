import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Header from './components/headerAndFooter/Header'
import Footer from './components/headerAndFooter/Footer'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage'


import './App.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
  
  return (
    <div>
     <Header />
     <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
     <Footer />
    </div>
  );
}

export default App;
