import React, { useState } from 'react';
import 'cirrus-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />
const lockIcon = <FontAwesomeIcon icon={faLock} />

function Settings() {
    return (
        <section>
            <div class="row level">
                <div class="col-xs-3 level-item">
                    <p class="m-0">First Name:</p>
                </div>
                <div class="col-xs-9 level-item">
                    <input type="firstname" value="John"/>
                </div>
            </div>
            <div class="row level">
                <div class="col-xs-3 level-item">
                    <p class="m-0">Last Name:</p>
                </div>
                <div class="col-xs-9 level-item">
                    <input type="lastname" value="Doe"/>
                </div>
            </div>
            <div class="row level">
                <div class="col-xs-3 level-item">
                    <p class="m-0">Email:</p>
                </div>
                <div class="col-xs-9 level-item">
                    <input type="email" value="john.doe@sample.com"/>
                </div>
            </div>
            <div class="row level">
                <div class="col-xs-3 level-item">
                    <p class="m-0">Password:</p>
                </div>
                <div class="col-xs-9 level-item">
                    <input type="password" value="password123"/>
                </div>
            </div>
        </section>
    )
}

export default Settings;
