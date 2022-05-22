import './App.css';
import {Helmet} from 'react-helmet';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
//import Delegation from './pages/Delegation';
import SingleDuty from './pages/SingleDuty';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';


import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='u-flex-column u-justify-center m-4'>
          <Helmet>
            <style>{'body { background-color: #9c9ef0}'}</style>
          </Helmet>
          <header>
            <h1 className='logo-text'>Duty Docket</h1>
          </header>
  
          <main className='u-flex u-items-center u-justify-space-evenly'>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/duty/:id" element={<SingleDuty />} />
              {/*<Route path="/delgation" element={<Delegation />} />*/}
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </main>
        </div>
      </Router>
    
    </ApolloProvider>
  );
}

export default App;
