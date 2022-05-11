import React, { useState } from 'react';
import 'cirrus-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import User from '../../../server/models';

function Dependents() {
    return (
        <div>
            <div>
                <h1>My Dependents:</h1>
                <ul>
                    <li>Sharon</li>
                    <li>Bob</li>
                    <li>Frank</li>
                    <li>Amanda</li>
                    <li>Julie</li>
                    <li>Billy</li>
                </ul>
            </div>
            <div>
                <div class="form-group">
                    <input type="name" class="form-group-input" placeholder="Enter new dependent here:"/>
                    <button class="form-group-btn">Add</button>
                </div>
            </div>
        </div>
    )
}

export default Dependents;

