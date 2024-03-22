import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Importer Link pour créer des liens de navigation

const SignInForm = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSignIn({ email, password });
  };

  return (
    <div>
      <h2>Connectez-vous à votre compte</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='email-label' htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label  className='password-label' htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit"><Link to="/signup">Sign In </Link></button>
      </form>
      {/* Lien pour passer au formulaire de création de compte */}
      <p>Pas de compte? <Link to="/signup">Créer un nouveau compte!</Link></p>
      <p>Mot de passe oublié? <Link to="/ForgetPassword">Créer un nouveau mot de passe!</Link></p>
      
    </div>
  );
};

SignInForm.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  onForgotPassword: PropTypes.func.isRequired,
};

export default SignInForm;
