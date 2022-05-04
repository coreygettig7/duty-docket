import React from 'react';
import 'cirrus-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />
const lockIcon = <FontAwesomeIcon icon={faLock} />

function Login() {
  return (
    <section id="login-form" className='form-wrapper card u-flex'>
      <form className='w-40p card_container form-card p-4'>
        <h3 className='dark-text'>Sign In</h3>
        <div className='input-control pb-2'>
          <label>Email address</label>
          <input 
            type='email'
            className='form-control input-contains-icon'
            placeholder='Enter email'
          />
            <span class="icon fa fa-wrapper">{envelopeIcon}</span>
        </div>
        <div className='input-control pb-2'>
          <label>Password</label>
          <input  
            type='password'
            className='input-control input-contains-icon'
            placeholder='password'
          />
            <span class="icon fa fa-wrapper">{lockIcon}</span>
        </div>
        <div className='d-grid'>
          <button 
            type='submit' 
            className='btn bg-link text-white'>
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default Login;