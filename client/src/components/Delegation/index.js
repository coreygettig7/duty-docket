import React, { useState } from 'react';
import 'cirrus-ui';
import { useMutation } from '@apollo/client';
import { ADD_DUTY } from '../../utils/mutations';
import { QUERY_ME_DUTIES, QUERY_ME } from '../../utils/queries';


const Delegation = () => {
    const [formState, setFormState] = useState({ 
        dutyText: '', 
        dutyDistinction: '', 
        dueDate: '', 
        dutyDeposit: ''
    });
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
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        })
    };
    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            await addDuty({
                variables: { ...formState }
            });
        }
        catch (e) {
            console.error(e);
        }
    };
    return (
        <div>
            <form onSubmit={handleFormSubmit} />
            <textarea
                placeholder='What is the new duty...'
                value={formState.dutyText}
                onChange={handleChange}
            />
            <textarea
                placeholder='Explain the duty here'
                value={formState.dutyDistinction}
                onChange={handleChange}
            />
            <textarea
                placeholder='When is the due date'
                value={formState.dueDate}
                onChange={handleChange}
            />
            <textarea
                placeholder='Allowance Amount'
                value={formState.dutyDeposit}
                onChange={handleChange}
            />
            <button>Submit</button>
        </div>
    )
};
export default Delegation;
