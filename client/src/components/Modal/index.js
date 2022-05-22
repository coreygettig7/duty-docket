import React from 'react';

function Modal({currentDuty}) {
  const { dutyText, createdAt, dueDate, dutyDistinction, dutyDeposit, dutyDoer, _id } = currentDuty;

  return (

    <div className="modal modalBackdrop" id="edit-modal">
      <a href="#anchor-to-background" className="u-pull-right text-light mr-3" aria-label="Close">
            CLOSE ❌
        </a>
      <form className="form bg-color p-4">
        <div className="input-control">
          <label className="font-bold text-light">Duty Text</label>
          <input 
          type="text" 
          className="input--xs"
          placeholder={dutyText}
          id="dutyText"></input>
        </div>

        <div className="input-control">
          <label className="font-bold text-light">Created At</label>
          <input
          type="text"
          className="input--xs"
          placeholder={createdAt}></input>
        </div>

        <div className="input-control">
          <label className="font-bold text-light">Due Date</label>
          <input
          type="text"
          className="input--xs"
          placeholder={dueDate}></input>
        </div>

        <div className="input-control">
          <label className="font-bold text-light">Duty Distinction</label>
          <input
          type="text"
          className="input--xs"
          placeholder={dutyDistinction}></input>
        </div>
        
        <div className="input-control mb-2">
          <label className="font-bold text-light">Duty Deposit</label>
          <input
          type="text"
          className="input--xs"
          placeholder={dutyDeposit}></input>
        </div>

        <div className="input-control">
          <button className="btn">Update</button>
        </div>
      </form>
  </div>

    

  );
};

export default Modal;