import React from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs'
import { BrowserRouter ,Route } from 'react-router-dom';

import './App.css';


const App = (props) => {
  return (
    <BrowserRouter>
     <div className = "app">
       <Header />
       <Navbar />
       <div className= "app-wrapper-content ">
         <Route path='/message' 
                render={ () => <Dialogs 
                  messages={props.state.profilePage.messages} 
                  dialogs={props.state.messagesPage.dialogs} /> }/>
         <Route path='/profile' 
                render={ () => <Profile 
                  posts={props.state.profilePage.posts} /> }/>
       </div>  
     </div>
    </BrowserRouter>
  );
};

export default App;