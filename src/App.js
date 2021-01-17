import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" />
      </header>
      <nav className="nav">
        <div>
          <div><a>Profile</a></div>
          <div><a>Messages</a></div>
          <div><a>News</a></div>
          <div><a>Music</a></div>
          <div><a>Settings</a></div>
        </div>
      </nav>
      <div className="content">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
        <div>ava+description</div>
        <div>myPost</div>
        <div>newPost</div>
        <div>post1</div>
        <div>post2</div>
        
      </div>
    </div>
  );
};

export default App;