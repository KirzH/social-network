import React from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';

import './App.css';

const App = () => {
  return (
    <div className = "app">
      <Header />
      < Navbar />
      <Profile />
    </div>
  );
};

export default App;