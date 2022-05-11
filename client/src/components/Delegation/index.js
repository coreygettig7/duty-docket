import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_DUTY } from '../../utils/mutations';
import { QUERY_ME_DUTIES } from '../../utils/queries';
const Delegation = () => {
    const [dutyText, setText] = useState('');
    const [dutyDistinction, setDistinction] = useState('');
    const [dueDate, setDate] = useState('');
    const [dutyDeposit, setDeposit] = useState('');
    const [addDuty, {error}] = useMutation(ADD_DUTY, {
        update(cache, { data: { addDuty }}) {
            try {
                const { duties } = cache.readQuery({ query: QUERY_ME_DUTIES });
                cache.writeQuery({
                    query: QUERY_ME_DUTIES,
                    data: { duties: [addDuty, ...duties ] }
                });
            }
            catch (e) {
                console.error(e);
            }
            const { me } = cache.readQuery({ query: QUERY_ME_DUTIES });
            cache.writeQuery({
                query: QUERY_ME_DUTIES,
                data: { me: { ...me, duties: [...me.duties, addDuty] } }
            });
        }
    });
    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setText(event.target.value);
            setDistinction(event.target.value);
            setDate(event.target.value);
            setDistinction(event.target.value);
        }
    };
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
            <form onSubmit={handleFormSubmit} />
            <textarea
                placeholder='What is the new duty...'
                value={dutyText}
                onChange={handleChange}
            />
            <textarea
                placeholder='Explain the duty here'
                value={dutyDistinction}
                onChange={handleChange}
            />
            <textarea
                placeholder='When is the due date'
                value={dueDate}
                onChange={handleChange}
            />
            <textarea
                placeholder='Allowance Amount'
                value={dutyDeposit}
                onChange={handleChange}
            />
            <button>Submit</button>
        </div>
    )
};
export default Delegation;