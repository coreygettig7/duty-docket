import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_DUTY } from '../utils/mutations';

import auth from '../utils/auth';

import 'cirrus-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dutyform(props) {
    const [formState, setFormState] = useState ({
            dutyName: '',
            dutyValue: '',
            dutyDescription: ''
    });
    const [addDuty] = useMutation(ADD_DUTY);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addDuty({
            variables: {
                dutyName: formState.dutyName,
                dutyValue: formState.dutyValue,
                dutyDescription: formState.dutyDescription
            },
        });

        const token = mutationResponse.data.addDuty.token;
        auth.login(token);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <>
        <div id='addDuty-Form' className=''>
            <form onSubmit={handleFormSubmit}>
                    <label htmlFor="dutyName">Duty Name</label>
                    <input
                        value={newDuty.dutyName}
                        placeholder='Name this Duty'
                        name='dutyName'
                        type='dutyName'
                        id='dutyName'
                        onChange={handleChange}
                    />

                    <label htmlFor="dutyValue">Duty Value</label>
                    <input
                        value={newDuty.dutyValue}
                        placeholder='Allowance'
                        name='dutyValue'
                        type='dutyValue'
                        id='dutyValue'
                        onChange={handleChange}
                    />

                    <label htmlFor="dutyDescription">Duty Description</label>
                    <input
                        value={newDuty.dutyDescription}
                        placeholder='Description'
                        name='dutyDescription'
                        type='dutyDescription'
                        id='dutyDescription'
                        onChange={handleChange}
                    />
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
            </form>
        </div>
        </>
    );
    }
}

export default Dutyform;