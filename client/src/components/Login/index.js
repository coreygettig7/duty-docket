import React , { useState } from 'react';
import 'cirrus-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';


const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />
const lockIcon = <FontAwesomeIcon icon={faLock} />

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: ''});

  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    })
  }

  // submit form handler
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState }
      });
      console.log(data)
    } catch (e) {
      console.error(e)
    }

    setFormState({
      email: '',
      password: ''
    })
  }

  return (
    <section id="login-form" className='form-wrapper card u-flex u-justify-center u-flex-column'>
      <form className='card_container form-card p-4' onSubmit={handleFormSubmit}>
        <h3 className='dark-text'>Sign In</h3>
        <div className='input-control pb-2'>
          <label>Email address</label>
          <input 
            type='email'
            className='form-control input-contains-icon'
            placeholder='Enter email'
            name='email'
            id='email'
            value={formState.email}
            onChange={handleChange}
          />
            <span class="icon fa fa-wrapper">{envelopeIcon}</span>
        </div>
        <div className='input-control pb-2'>
          <label>Password</label>
          <input  
            type='password'
            className='input-control input-contains-icon'
            placeholder='*****'
            name='password'
            id='password'
            value={formState.password}
            onChange={handleChange}
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
      {error && <div><p className="error">Login failed</p></div>}
      <div id="sign-up-link" className="m-3">
        <span>Don't have an account? <Link to="/signup">Sign up!</Link></span>
      </div>
    </section>
  )
}

export default Login;