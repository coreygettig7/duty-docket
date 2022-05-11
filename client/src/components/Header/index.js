import React, { useState } from 'react';
import 'cirrus-ui';
import Navigation from '../Nav';
import DailyDuties from '../DailyDuties';
import Docket from '../Docket';
import Delegation from '../Delegation'
import Auth from '../../utils/auth';
// import Delegation from '../../pages/Delegation';

function Header() {
  const [currentPage, handlePageChange] = useState('Daily Duties');

  const renderPage = () => {
      switch(currentPage) {
        case 'Daily Duties':
          return  <DailyDuties />;
        case 'Duty Docket':
          return <Docket />;
        case 'Duty Delegation':
          return <Delegation />
        default:
            return <DailyDuties />
      }
  }
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  }
  return (
    <div className='set-width'>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* Call the renderPage function passing in the currentPage */}
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
      <div>
        <button type='button' onClick={logout}>Log Out</button>
      </div>
      
    </div>
  )
}

export default Header;