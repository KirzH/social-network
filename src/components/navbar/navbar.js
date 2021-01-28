import React from 'react';

import a from'./navbar.module.css';

const Navbar = () => {
    return (
       <nav className={a.nav}>
         <div className={a.item}>
          <div>
            <a href="/profile" >Profile</a>
          </div>
          <div>
            <a>Messages</a>
          </div>
          <div>
            <a>News</a>
          </div>
          <div>
            <a>Music</a>
          </div>
          <div>
            <a>Settings</a>
          </div>
         </div>
      </nav>
    );
};

export default Navbar;