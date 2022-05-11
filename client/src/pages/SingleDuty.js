import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_DUTY } from '../utils/queries';

const SingleDuty = () => {
  const { id: dutyId } = useParams();
  // console.log(dutyId);
  const { loading, data } = useQuery(QUERY_DUTY, {
    variables: { id: dutyId }
  });

  const duty = data?.duty || {};
  
  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="tile bg-white set-width p-4">
      <div className="tile__icon">
        <figure className="avatar"><img src="/DutyDocket.png" alt="duty icon"/></figure>
      </div>
      <div className="tile__container">
        <p className="tile__title m-0">{duty.dutyText}</p>
        <p className="tile__subtitle m-0"><b>Created On:</b> {duty.createdAt} | <b>Due Date:</b> {duty.dueDate}</p>
        <p className="info"><b>Duty Distinction:</b> {duty.dutyDistinction}</p>
        <p className="info"><b>Duty Deposit:</b> ${duty.dutyDeposit}</p>
        <div className="tile__buttons m-0">
          <button class="btn--sm uppercase mr-4">Edit</button>
          <button class="btn-primary btn--sm uppercase">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default SingleDuty;