// import logo from './logo.svg';
import React from 'react';
import {Helmet} from 'react-helmet';
import './App.css';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #5E60CE}'}</style>
      </Helmet>
      <h1 className='logo-text'>Duty Docket</h1>
      <Welcome />
    </div>
  
  );
}

export default App;
