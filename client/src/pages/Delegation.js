import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_DUTY, UPDATE_DUTY, REMOVE_DUTY } from '../utils/mutations';
import { QUERY_USER } from '../utils/queries';
import auth from '../utils/auth';

import 'cirrus-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dutyform = ({ Duty }) => {
    const [newDuty, setNewDuty] = useState({
        dutyName: '',
        dutyValue: '',
        dutyDescription: ''
    });

    const [addDuty] = useMutation(ADD_DUTY, {
        refetchQueries: [{ query: QUERY_USER }]
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const user = Auth.getProfile();
            await addDuty({
                variables: {
                    dutyName: newDuty.dutyName,
                    dutyValue: newDuty.dutyValue,
                    dutyDescription: newDuty.dutyDescription,
                    user: user.data._id
                },
            });
            setNewDuty({
                dutyName: '',
                dutyValue: '',
                dutyDescription: '',
            });
        }
        catch(error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNewDuty({
            ...newDuty,
            [name]: value,
        });
    };

    return (
        <>
        <section id='addDuty-Form' className=''>
            <form onSubmit={handleFormSubmit}>
                    <label>Duty Name</label>
                    <input
                        value={newDuty.dutyName}
                        placeholder='Name this Duty'
                        name='dutyName'
                        type='dutyName'
                        id='dutyName'
                        onChange={handleChange}
                    />

                    <label>Duty Value</label>
                    <input
                        value={newDuty.dutyValue}
                        placeholder='Allowance'
                        name='dutyValue'
                        type='dutyValue'
                        id='dutyValue'
                        onChange={handleChange}
                    />

                    <label>Duty Description</label>
                    <input
                        value={newDuty.dutyDescription}
                        placeholder='Description'
                        name='dutyDescription'
                        type='dutyDescription'
                        id='dutyDescription'
                        onChange={handleChange}
                    />
            </form>
        </section>
        </>
    )
}