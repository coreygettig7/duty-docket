import React, { Component } from 'react';
export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Sign In</h3>
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
            placeholder='password'
          />
        </div>
        <div className='d-grid'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    )
  }
}
