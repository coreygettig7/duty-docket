import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_DUTY } from '../../utils/mutations'

function Modal({currentDuty}) {
  const { dutyText, dueDate, dutyDistinction, dutyDeposit } = currentDuty; 

  const [ newDutyText, setDutyText ] = useState(dutyText);
  const [ newDueDate, setDueDate ] = useState(dueDate);
  const [ newDutyDistinction, setDutyDistinction ] = useState(dutyDistinction);
  const [ newDutyDeposit, setDutyDeposit ] = useState(dutyDeposit);

  const [updateDuty, { error }] = useMutation(UPDATE_DUTY);


  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      // update duty in the database
      await updateDuty({
        variables: { dutyText, dueDate, dutyDistinction, dutyDeposit }
      })
      setDutyText('');
      setDueDate('');
      setDutyDistinction('');
      setDutyDeposit('');
    } catch(e) {
      console.log(e);
    }
  }

  return (

    <div className="modal modalBackdrop" id="edit-modal">
      <a href="#anchor-to-background" className="u-pull-right text-light mr-3" aria-label="Close">
            CLOSE ❌
        </a>
      <form className="form bg-color p-4" onSubmit={handleFormSubmit}>
        <div className="input-control">
          <label className="font-bold text-light">Duty Text</label>
          <input 
          type="text" 
          className="input--xs"
          placeholder={dutyText}
          id="dutyText"></input>
        </div>
        <div className="input-control">
          <label className="font-bold text-light">Due Date</label>
          <input
          type="text"
          className="input--xs"
          placeholder={dueDate}></input>
        </div>

        <div className="input-control list-dropdown">
          <label for="distinction" className="font-bold text-light">Duty Distinction</label>
          <select name="distinction" id="dutyDistinction">
            <option value="Not started">Not Started</option>
            <option value="In progress">In progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        
        <div className="input-control mb-2">
          <label className="font-bold text-light">Duty Deposit</label>
         <input
          type="text"
          className="input--xs"
          placeholder={dutyDeposit}></input>
        </div>

        <div className="input-control">
          <button className="btn" type="submit">Update</button>
        </div>
      </form>
  </div>

    

  );
};

export default Modal;