import React, { useState } from 'react';
import 'cirrus-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Nav';

const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />
const lockIcon = <FontAwesomeIcon icon={faLock} />

logout = () => {
  sessionStorage.removeItem('userToken');
  sessionStorage.clear();
  this.props.history.push('../../pages/Welcome.js');

}

function Header() {
      const [currentPage, handlePageChange] = useState('Daily Duties');

    const renderPage = () => {
        switch(currentPage) {
          case 'Daily Duties':
            return <Daily-Duties />;
          case 'Duty Calendar':
            return <Duty-Calendar />;
          case 'Duty Delegation':
            return <Duty-Delagation />;
          case 'Settings':
            return <Settings />;
          default:
              return <Daily-Duties />;
        }
    }
    return (
      <div>
        <nav className="navbar">
          <div className="navbar-brand">
            <a
              className="navbar-item"
              rel="noreferrer"
              target="_blank"
            >
              <h2 className="header" >Duty Docket</h2>
            </a>
          </div>
        </nav>
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
          <button type='button' onClick={this.logout}>Log Out</button>
        </div>
        
      </div>
    )
}

export default Header;