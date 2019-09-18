import React from 'react';

import logo from '../assets/logo.svg';
import SignUpForm from './SignUpForm.js';
import LabeledInput from './LabeledInput.js';

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>Sign-up</h1>
        <img src={logo} className="Logo" alt="logo" />
      </header>
      <SignUpForm onEntry={()=>''} onSubmit={()=>''} >
        <LabeledInput
          //todo props of these inputs for signups

        />
      </SignUpForm>
    </div>
  );
}

export default App;
