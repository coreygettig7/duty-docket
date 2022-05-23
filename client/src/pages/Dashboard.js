import React from 'react';
import Header from '../components/Header';
import 'cirrus-ui';
<<<<<<< HEAD
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
=======

const Dashboard = () => {
  return (
    <div className="wrapper">
      <div id="left-nav" className="u-pull-left">
        <Header />
      </div>
      <div id="right-component">
      Hotdog gang 🌭
      </div>
>>>>>>> 49b9f2e9b2a1faad2927c7441975514425e9d816
    </div>
  )
}

export default Dashboard;