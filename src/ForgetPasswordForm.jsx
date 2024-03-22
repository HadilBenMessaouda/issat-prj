import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ForgetPasswordForm = ({ onResetPassword }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onResetPassword(email);
    setEmail(''); // Réinitialiser le champ email après soumission du formulaire
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

ForgetPasswordForm.propTypes = {
  onResetPassword: PropTypes.func.isRequired,
};

export default ForgetPasswordForm;
