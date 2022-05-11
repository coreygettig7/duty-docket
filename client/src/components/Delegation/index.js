import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_DUTY } from '../../utils/mutations';
import { QUERY_ME_DUTIES, QUERY_ME } from '../../utils/queries';

const DutyForm = () => {
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
                console.error();
            }
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
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
        <div>
            <form onSubmit={handleFormSubmit} />
            <textarea
                type='text'
                className='form-control'
                placeholder='What is the new duty...'
                value={dutyText}
                onChange={handleChange}
            />
            <textarea
                type='text'
                className='form-control'
                placeholder='Explain the duty here'
                value={dutyDistinction}
                onChange={handleChange}
            />
            <textarea
                type='text'
                className='form-control'
                placeholder='When is the due date'
                value={dueDate}
                onChange={handleChange}
            />
            <textarea
                type='text'
                className='form-control'
                placeholder='Allowance Amount'
                value={dutyDeposit}
                onChange={handleChange}
            />
            <button>Submit</button>
        </div>
    )
};

export default DutyForm;