import React, { useState } from 'react';
import 'cirrus-ui';
import { useMutation } from '@apollo/client';
import { ADD_DUTY } from '../../utils/mutations';
<<<<<<< HEAD
=======
import { QUERY_ME_DUTIES, QUERY_ME } from '../../utils/queries';
>>>>>>> 49b9f2e9b2a1faad2927c7441975514425e9d816


const Delegation = () => {
    const [dutyText, setText] = useState('');
    const [dutyDistinction, setDistinction] = useState('');
    const [dueDate, setDate] = useState('');
    const [dutyDeposit, setDeposit] = useState('');

<<<<<<< HEAD
    const [addDuty] = useMutation(ADD_DUTY)

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(dutyText, dutyDistinction, dueDate, dutyDeposit)
        try {
            await addDuty({
                variables: { dutyText, dutyDistinction, dueDate, dutyDeposit }
            });
        }
        catch (e) {
            console.error(e);
        }
        window.location.assign("/dashboard");
    };

=======
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
>>>>>>> 49b9f2e9b2a1faad2927c7441975514425e9d816
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
<<<<<<< HEAD
    return (
        <section id="delegation-wrapper" className="ml-2">
            <div className="card p-3">
            <h3 className="text-centered dark-text">Add a new duty</h3>
            <form onSubmit={handleFormSubmit} >
=======
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
>>>>>>> 49b9f2e9b2a1faad2927c7441975514425e9d816
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
<<<<<<< HEAD
            <button type="submit" className="btn">Submit</button>
        </form>
        </div>
        </section>
        
=======
            <button type="submit">Submit</button>
            {error && <div>Please complete the form</div>}
        </div>
>>>>>>> 49b9f2e9b2a1faad2927c7441975514425e9d816
    )
};
export default Delegation;