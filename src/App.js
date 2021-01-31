import React from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs'

import './App.css';

const App          = () => {
  return (
    <div className = "app">
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <div className= "app-wrapper-content ">
        <Dialogs />
      </div>  
    </div>
  );
};

export default App;