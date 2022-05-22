import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_DUTY } from '../../utils/mutations';
import { QUERY_DUTY, QUERY_ME } from '../../utils/queries';
import { useParams } from 'react-router-dom';

function Modal({currentDuty}) {
  // destructure the props
  const { text, date, distinction, deposit } = currentDuty; 
  
  
  const [ dutyText, setDutyText ] = useState(text);
  const [ dueDate, setDueDate ] = useState('');
  const [ dutyDistinction, setDutyDistinction ] = useState('');
  const [ dutyDeposit, setDutyDeposit ] = useState('');

  const [updateDuty, { error }] = useMutation(UPDATE_DUTY);

  // get dutyId from the params
  const { id: dutyId } = useParams();
  const {loading, data } = useQuery(QUERY_DUTY, {
    variables: { id: dutyId }
  })
  const duty = data?.duty || {};

  if (loading) {
    return <div>Loading...</div>;
  }


  const handleFormSubmit = async event => {
    event.preventDefault();
    console.log(dutyId, dutyText, dueDate, dutyDistinction, dutyDeposit)

    try {
      // update duty in the database
      await updateDuty({
        variables: { dutyId, dutyText, dueDate, dutyDistinction, dutyDeposit }
      })
      setDutyText('');
      setDueDate('');
      setDutyDistinction('');
      setDutyDeposit('');

      // test what's being passed to the backend from the form
      // console.log(newDutyText, newDueDate, newDutyDistinction, newDutyDeposit)
    } catch(e) {
      console.log(e);
    }
  }

  const handleDutyTextChange = (event) => {
    setDutyText(event.target.value);
  };
  const handleDueDateChange = (event) => {
    setDueDate(event.target.value); 
  };
  const handleDutyDistinctionChange = (event) => {
    setDutyDistinction(event.target.value)
  }
  const handleDutyDepositChange = (event) => {
    setDutyDeposit(event.target.value);
  }

  return (

    <div className="modal modalBackdrop" id="edit-modal">
      <a href="#anchor-to-background" className="u-pull-right text-light mr-3" aria-label="Close">
            CLOSE ❌
        </a>
      <form className="form modalBackground p-4" key={dutyId} onSubmit={handleFormSubmit}>
        <div className="input-control">
          <label className="font-bold text-light">Duty Text</label>
          <input 
          type="text" 
          className="input--xs"
          placeholder={text}
          id="dutyText"
          name="dutyText"
          value={dutyText}
          onChange={handleDutyTextChange}></input>
        </div>
        <div className="input-control">
          <label className="font-bold text-light">Due Date</label>
          <input
          type="text"
          className="input--xs"
          placeholder={date}
          name="dueDate"
          id="dueDate"
          value={dueDate}
          onChange={handleDueDateChange}></input>
        </div>

        <div className="input-control list-dropdown">
          <label for="distinction" className="font-bold text-light">Duty Distinction</label>
          <input
          type="text"
          className="input--xs"
          placeholder={distinction}
          name="dutyDistinction"
          id="dutyDistinction"
          value={dutyDistinction}
          onChange={handleDutyDistinctionChange}></input>
        </div>
        
        <div className="input-control">
          <label className="font-bold text-light">Duty Deposit</label>
         <input
          type="text"
          className="input--xs"
          placeholder={deposit}
          id="dutyDeposit"
          name="dutyDeposit"
          value={dutyDeposit}
          onChange={handleDutyDepositChange}></input>
        </div>

        

        <div className="input-control">
          <button className="btn" type="submit">Update</button>
        </div>
        {error && <span className="ml-2 error">Something went wrong...</span>}
      </form>
      
  </div>

    

  );
};

export default Modal;