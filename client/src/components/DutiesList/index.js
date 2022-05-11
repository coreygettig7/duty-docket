import React from 'react';
import 'cirrus-ui';
import { Link } from 'react-router-dom';

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

            <td><Link to={`/duty/${duty._id}`}>View Details</Link></td>
          </tr>
        ))
      }
    </tbody>
  )
};

export default DutiesList;
