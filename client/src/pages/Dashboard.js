import React from 'react';
import Header from '../components/Header';
import 'cirrus-ui';

const Dashboard = () => {
  return (
    <div className="wrapper">
      <div id="left-nav" className="u-pull-left">
        <Header />
      </div>
      <div id="right-component">
      Hotdog gang 🌭
      </div>
    </div>
  )
}

export default Dashboard;