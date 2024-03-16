import React, { useState } from 'react';
import './App.css';
import { MdEmail } from "react-icons/md";
import { FaLock } from 'react-icons/fa';

function App() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email) {
      setErrorMessage('Please enter your email.'); 
    } else if (password.length < 6) {
      setErrorMessage('Password must have at least 6 characters.');
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setErrorMessage('Password must contain at least one special character.');
    } else {
      setIsLoggedIn(true);
      setEmail(''); 
      setPassword('');
      setErrorMessage('');
    }
  };

  return (
    <div className="login-Form">
      <div className="container">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <br />
          <div className="input-box">
            <input
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MdEmail className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
          <br />
          <br />
          <button type="submit" className="btn">
            Login
          </button>
          {errorMessage && <p className="error-message"><br></br>{errorMessage}</p>}
          {isLoggedIn && <p className="success-message"><br />Login successful!</p>}
        </form>
      </div>
    </div>
  );
}

export default App;
