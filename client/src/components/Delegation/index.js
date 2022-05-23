import React, { useState } from 'react';
import 'cirrus-ui';
import { useMutation } from '@apollo/client';
import { ADD_DUTY } from '../../utils/mutations';


const Delegation = () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 89b672db4fae442afacfeba36bf6e54da46e8c11
    const [dutyText, setText] = useState('');
    const [dutyDistinction, setDistinction] = useState('');
    const [dueDate, setDate] = useState('');
    const [dutyDeposit, setDeposit] = useState('');

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
    return (
        <section id="delegation-wrapper" className="ml-2">
            <div className="card p-3">
            <h3 className="text-centered dark-text">Add a new duty</h3>
            <form onSubmit={handleFormSubmit} >
            <input
<<<<<<< HEAD
=======
=======
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
>>>>>>> 0204ed1f345b676de3f2caebf02caac94b8b0773
>>>>>>> 89b672db4fae442afacfeba36bf6e54da46e8c11
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
<<<<<<< HEAD
            <button type="submit" className="btn">Submit</button>
        </form>
=======
<<<<<<< HEAD
            <button type="submit" className="btn">Submit</button>
        </form>
=======
            <button>Submit</button>
>>>>>>> 0204ed1f345b676de3f2caebf02caac94b8b0773
>>>>>>> 89b672db4fae442afacfeba36bf6e54da46e8c11
        </div>
        </section>
        
    )
};
export default Delegation;
