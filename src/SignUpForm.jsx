import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SignUpForm = ({ onCreateAccount }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateAccount({ email, password });
  };

  return (
    <div>
      <h2>Creer un compte</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label  className ='email-label' htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='password-label' htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

SignUpForm.propTypes = {
  onCreateAccount: PropTypes.func.isRequired,
};

export default SignUpForm;
