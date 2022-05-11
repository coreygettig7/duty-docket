import React, { useState } from 'react';
import 'cirrus-ui';
import Navigation from '../Nav';
import DailyDuties from '../DailyDuties';
import Docket from '../Docket';
// import Delegation from '../../pages/Delegation';

const logout = () => {
  sessionStorage.removeItem('userToken');
  sessionStorage.clear();
  this.props.history.push('../../pages/Welcome.js');
}

function Header() {
  const [currentPage, handlePageChange] = useState('Daily Duties');

  const renderPage = () => {
      switch(currentPage) {
        case 'Daily Duties':
          return  <DailyDuties />;
        case 'Duty Docket':
          return <Docket />;
        case 'Duty Delegation':
          return //<Delegation />
        default:
            return 'Daily Duties' //<DailyDuties />;
      }
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
        <button type='button' /*onClick={this.logout}*/>Log Out</button>
      </div>
      
    </div>
  )
}

export default Header;