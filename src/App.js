import React from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs'
import { BrowserRouter ,Route } from 'react-router-dom';

import './App.css';


const App = () => {
  return (
    <BrowserRouter>
     <div className = "app">
       <Header />
       <Navbar />
       <div className= "app-wrapper-content ">
         <Route path='/message' component={Dialogs} />
         <Route path='/profile' component={Profile} />
       </div>  
     </div>
    </BrowserRouter>
  );
};

export default App;