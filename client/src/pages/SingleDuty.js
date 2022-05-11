import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DUTY } from '../utils/queries';

const SingleDuty = () => {
  const { id: dutyId } = useParams();
  const { loading, data } = useQuery(QUERY_DUTY, {
    variables: { id: dutyId }
  });
  
  const duty = data?.duty || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <div className="card__container">
        <div className="content">
          <p>dutyText</p>
          <p>dutyDate</p>
          <p>dutyDistinction</p>
          <p>DutyDeposit</p>
          <p>createdAt</p>
          <p>dutyDoer</p>
        </div>
      </div>

    </div>
  )
}

export default SingleDuty;