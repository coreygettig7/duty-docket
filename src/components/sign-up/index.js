import React, { Component } from 'react'
export default class SignUp extends Component {
  render () {
    return (
      <form>
        <h3>Sign Up</h3>
        <div className='entry-field'>
          <label>First name</label>
          <input 
            type='text'
            className='form-control'
            placeholder='First name'
          />
        </div>
        <div className='entry-field'>
          <label>Last name</label>
          <input  
            type='text'
            className='form-control'
            placeholder='Last name'
          />
        </div>
        <div className='entry-field'>
          <label>Email address</label>
          <input  
            type='email'
            className='form-control'
            placeholder='Enter email'
          />
        </div>
        <div className='entry-field'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Enter password'
          />
        </div>
        <div className='d-grid'>
          <button type='submit' className='btn btn-primary'>
            Sign Up
          </button>
        </div>
        <p className='have-account text-right'>
          Already registered <a href='/login'>sign in</a>
        </p>
      </form>
    )
  }
}