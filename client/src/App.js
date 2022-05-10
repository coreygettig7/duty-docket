import logo from './task-icon-white.png';
import React from 'react';
import {Helmet} from 'react-helmet';
import './App.css';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/*import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/client';*/

/*const httpLink = createHttpLink({
  uri: '/graphql'
})
*/

function App() {
  return (
    <div className='u-flex-column u-justify-center'>
      <Helmet>
        <style>{'body { background-color: #43A8DE}'}</style>
      </Helmet>
      <header>
        <h1 className='logo-text'>Duty Docket</h1>
      </header>
  
      <main className='u-flex u-items-center u-justify-space-evenly'>
        <Welcome />
        <div className='icon-container u-flex-grow-0'>
          <img src={logo} alt="Duty Docket Logo"/>
        </div>
      </main>
    </div>
  
  );
}

export default App;
 