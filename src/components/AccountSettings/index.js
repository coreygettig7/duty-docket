import React, { useState } from 'react';
import 'cirrus-ui';


function Settings() {
    return (
        <section>
            <div class="row level">
                <div class="col-xs-3 level-item">
                    <p class="m-0">First Name:</p>
                </div>
                <div class="col-xs-9 level-item">
                    <input type="firstName" placeholder="John"/>
                </div>
            </div>
            <div class="row level">
                <div class="col-xs-3 level-item">
                    <p class="m-0">Last Name:</p>
                </div>
                <div class="col-xs-9 level-item">
                    <input type="lastName" placeholder="Doe"/>
                </div>
            </div>
            <div class="row level">
                <div class="col-xs-3 level-item">
                    <p class="m-0">Email:</p>
                </div>
                <div class="col-xs-9 level-item">
                    <input type="email" placeholder="john.doe@sample.com"/>
                </div>
            </div>
            <div class="row level">
                <div class="col-xs-3 level-item">
                    <p class="m-0">Password:</p>
                </div>
                <div class="col-xs-9 level-item">
                    <input type="password" placeholder="password123"/>
                </div>
            </div>
        </section>
    )
}

export default Settings;
