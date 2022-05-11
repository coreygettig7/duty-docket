import React from 'react';

const DoersList = ({ dutyDoer }) => {
  return(
    <div>
      <div id="doer-header" className="bg-white">
        <h3>Duty Doers</h3>
      </div>

      <div id="doer-list">
        <ul className="no-bullets">
          {dutyDoer && 
            dutyDoer.map(doer => (
              <li>{doer.name}</li>
            ))}
        </ul>
      </div>
    </div>
  
  )
};

export default DoersList;