import React from 'react';
import Header from '../components/Header';
import 'cirrus-ui';
import Auth from '../utils/auth';

const Dashboard = () => {

  const loggedIn = Auth.loggedIn();
  
  return (
    <div className="wrapper">
      {loggedIn && ( 
        <>
        <div id="left-nav" className="u-pull-left">
          <Header />
        </div>
    
        <div id="right-component">
          Hotdog gang 🌭
        </div>
        </>
      )}
    </div>
  )
}

export default Dashboard;