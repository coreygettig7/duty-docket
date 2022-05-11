import './App.css';
import {Helmet} from 'react-helmet';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import Delegation from './pages/Delegation';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='u-flex-column u-justify-center'>
          <Helmet>
            <style>{'body { background-color: #f7fbff}'}</style>
          </Helmet>
          <header>
            <h1 className='logo-text'>Duty Docket</h1>
          </header>
  
          <main className='u-flex u-items-center u-justify-space-evenly'>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/delgation" element={<Delegation />} />
              <Route path="*" eelement={<NoMatch />} />
            </Routes>
          </main>
        </div>
      </Router>
    
    </ApolloProvider>
  );
}

export default App;
