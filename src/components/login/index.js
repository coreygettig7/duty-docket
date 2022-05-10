import React from 'react';
import 'cirrus-ui';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

// const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />
// const lockIcon = <FontAwesomeIcon icon={faLock} />

function Login() {
 return (
  //   <section id="login-form" className='form-wrapper card u-flex u-justify-center'>
  //     <form className='card_container form-card p-4'>
  //       <h3 className='dark-text'>Sign In</h3>
  //       <div className='input-control pb-2'>
  //         <label>Email address</label>
  //         <input 
  //           type='email'
  //           className='form-control input-contains-icon'
  //           placeholder='Enter email'
  //         />
  //           <span class="icon fa fa-wrapper">{envelopeIcon}</span>
  //       </div>
  //       <div className='input-control pb-2'>
  //         <label>Password</label>
  //         <input  
  //           type='password'
  //           className='input-control input-contains-icon'
  //           placeholder='password'
  //         />
  //           <span class="icon fa fa-wrapper">{lockIcon}</span>
  //       </div>
  //       <div className='d-grid'>
  //         <button 
  //           type='submit' 
  //           className='btn bg-link text-white'>
  //           Submit
  //         </button>
  //       </div>
  //     </form>
  //   </section>

        <section className=''>
          <div class="row level">
              <div class="col-xs-3 level-item">
                  <p class="m-0">First Name:</p>
              </div>
              <div class="col-xs-9 level-item"><input type="firstname" placeholder="John Doe"/></div>
          </div>
          <div class="row level">
              <div class="col-xs-3 level-item">
                  <p class="m-0">Last Name:</p>
              </div>
              <div class="col-xs-9 level-item"><input type="lastname" placeholder="John Doe"/></div>
          </div>
          <div class="row level">
              <div class="col-xs-3 level-item">
                  <p class="m-0">Email:</p>
              </div>
              <div class="col-xs-9 level-item"><input type="email" placeholder="john.doe@cirrus.io"/></div>
          </div>
          <div class="row level">
              <div class="col-xs-3 level-item">
                  <p class="m-0">Password:</p>
              </div>
              <div class="col-xs-9 level-item"><input type="password" placeholder="password"/></div>
          </div>
          <input type="submit"  class="hover-grow btn-info" value="Submit changes"></input>
      </section>
  )
}

export default Login;