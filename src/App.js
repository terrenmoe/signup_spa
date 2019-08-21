import React from 'react';
import logo from './logo.svg';
import LoginForm from './LoginForm.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm name="Login" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Login to continue ⮩
        </p>
        <a
          className="App-link"
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Come back Soon!
        </a>
      </header>
    </div>
  );
}

export default App;
