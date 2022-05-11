
import React from 'react';
import 'cirrus-ui';

const DutiesList = ({ duties }) => {
  if (!duties.length) {
    return <h3 className="text-white">No duties yet!</h3>
  }

  return (
    <tbody>
      {duties &&
        duties.map(duty => (
          <tr key={ duty._id }>
            <td>{duty.dutyText}</td>
            <td>{duty.createdAt}</td>
            <td>{duty.dueDate}</td>
            <td>{duty.dutyDistinction}</td>
            <td>${duty.dutyDeposit}</td>
            <td><button>View Details</button></td>
          </tr>
        ))
      }
    </tbody>
  )
};

export default DutiesList;
