import React, { useState } from 'react';
import 'cirrus-ui';
import { useMutation } from '@apollo/client';
import { ADD_DUTY } from '../../utils/mutations';
import { QUERY_ME_DUTIES, QUERY_ME } from '../../utils/queries';


const Delegation = () => {
    const [dutyText, setText] = useState('');
    const [dutyDistinction, setDistinction] = useState('');
    const [dueDate, setDate] = useState('');
    const [dutyDeposit, setDeposit] = useState('');

    const [addDuty, {error}] = useMutation(ADD_DUTY, {
        update(cache, { data: { addDuty }}) {
            try {
                const { me } = cache.readQuery({ query: QUERY_ME });
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: { ...me, duties: [...me.duties, addDuty]}}
                });
            }
            catch (e) {
                console.error(e);
            }
            const { duties } = cache.readQuery({ query: QUERY_ME_DUTIES });
            cache.writeQuery({
                query: QUERY_ME_DUTIES,
                data: { duties: [addDuty, ...duties] }
            });
        }
    });
    const handleDateChange = event => {
        setDate(event.target.value);
        
    };
    const handleTextChange = event => {
        setText(event.target.value)
        
    }
    const handleDistinctionChange = event => {
        setDistinction(event.target.value);
    }
    const handleDepositChange = event => {
        setDeposit(event.target.value);
    }
    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            await addDuty({
                variables: { dutyText, dutyDistinction, dueDate, dutyDeposit }
            });
            setText('');
            setDistinction('');
            setDate('');
            setDeposit('');
        }
        catch (e) {
            console.error(e);
        }
    };
    return (
        <div className="card p-3">
            <h3 className="text-centered">Add a new duty</h3>
            <form onSubmit={handleFormSubmit} />
            <input
                placeholder='What is the new duty...'
                value={dutyText}
                onChange={handleTextChange}
                name="dutyText"
                id="dutyText"
                className="mb-2"
            />
            <input
                placeholder='What is the status of the duty'
                value={dutyDistinction}
                onChange={handleDistinctionChange}
                className="mb-2"
                id="dutyDistinction"
                name="duytDistinction"
            />
            <input
                placeholder='When is the due date'
                value={dueDate}
                onChange={handleDateChange}
                className="mb-2"
                name="dueDate"
                id="dueDate"
            />
            <input
                placeholder='Allowance Amount'
                value={dutyDeposit}
                onChange={handleDepositChange}
                className="mb-2"
                name="dutyDeposit"
                id="dutyDeposit"
            />
            <button type="submit">Submit</button>
            {error && <div>Please complete the form</div>}
        </div>
    )
};
export default Delegation;