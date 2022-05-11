import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Signup = () =>  {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };



  return (
    <form onSubmit={handleFormSubmit}>
      <h3>Sign Up</h3>
      <div className='entry-field'>
        <label>Username</label>
        <input 
          type='text'
          className='form-control'
          placeholder='Username'
          name="username"
          id="username"
          value={formState.username}
          onChange={handleChange}
        />
      </div>

      <div className='entry-field'>
        <label>Email address</label>
        <input  
          type='email'
          className='form-control'
          placeholder='Enter email'
          name="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
          
        />
      </div>
      <div className='entry-field'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='******'
          name="password"
          id="password"
          value={formState.password}
          onChange={handleChange}
        />
      </div>
      <div className='d-grid'>
        <button type='submit' className='btn btn-primary'>
          Sign Up
        </button>
      </div>
      <p className='have-account text-right'>
        Already registered? 
      </p>
      <Link to="/">Log In</Link>
      {error && <div><p className="error">Sign up failed</p></div>}
    </form>
  )
}

export default Signup;