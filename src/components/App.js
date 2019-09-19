import React from 'react';

import logo from '../assets/starRing.svg';
import SignUpForm from './SignUpForm.js';
import LabeledInput from './LabeledInput.js';

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h3>Sign-up</h3>
        <img src={logo} className="Logo" alt="logo" />
      </header>
      <SignUpForm onEntry={()=>''} onSubmit={()=>''} >
        <LabeledInput
          //todo props of these inputs for signups
          name='Username'
          type='text'
          defaultValue=''
          placeholder='Enter your desired username'
        />
        <LabeledInput
          //todo props of these inputs for signups
          name='Password'
          type='password'
          defaultValue=''
          placeholder='Enter your password'
        />
        <LabeledInput
          //todo props of these inputs for signups
          name='Email'
          type='email'
          defaultValue=''
          placeholder='uname@hostname.tld'
        />
      </SignUpForm>
    </div>
  );
}

export default App;
