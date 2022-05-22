import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_DUTY } from '../utils/queries';
import DoersList from '../components/DoersList';
import Modal from '../components/Modal';



const SingleDuty = () => {
  const [ currentDuty, setCurrentDuty ] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);


  const { id: dutyId } = useParams();
  // console.log(dutyId);
  const { loading, data } = useQuery(QUERY_DUTY, {
    variables: { id: dutyId }
  });

  const duty = data?.duty || {};
  
  if (loading) {
    return <div>Loading ...</div>;
  }

  const openDuty = (duty) => {
    setCurrentDuty({ ...duty});
    setIsModalOpen(true);
  }

  return (
    <div>
      {isModalOpen && <Modal currentDuty={currentDuty}/>}
      <div className="tile bg-white set-width p-4">
        <div className="tile__icon">
          <figure className="avatar"><img src="/DutyDocket.png" alt="duty icon"/></figure>
        </div>
        <div className="tile__container">
          <h4 className="tile__title mb-3">{duty.dutyText}</h4>
          <p className="tile__subtitle m-0"><b>Created On:</b> {duty.createdAt} | <b>Due Date:</b> {duty.dueDate}</p>
          <p className="info"><b>Duty Distinction:</b> {duty.dutyDistinction}</p>
          <p className="info"><b>Duty Deposit:</b> ${duty.dutyDeposit}</p>
          {duty.dutyDoer > 0 && <DoersList dutyDoer={duty.dutyDoer}/>}
          <div className="tile__buttons m-0">
            <a 
              href="#edit-modal"
              onClick={() => openDuty(duty)}
              key={duty._id}
              className="my_button"
            >
                Edit
            </a>
            <button className="btn-primary btn--sm uppercase">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleDuty;