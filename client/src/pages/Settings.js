import React from 'react';
import Dependents from '../../../src/components/Dependents/index.js';
import AccountSettings from '../components/AccountSettings/index.js';

const Settings = () => {
  return(
    <main>
      <div className="row">
        <div className="col-6">
          <AccountSettings />
        </div>
        <div className='col-6'>
          <Dependents />
        </div>
      </div>
    </main>
  )
};

export default Settings;