import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import ForgetPasswordForm from './ForgetPasswordForm';
import Home from './Home';
import './App.css'; // Import du fichier CSS
import './Home';

const App = () => {
  const handleSignIn = (formData) => {
    console.log('Sign in with:', formData);
    // Implémentez ici votre logique de connexion
  };

  const handleCreateAccount = (formData) => {
    console.log('Create an account with:', formData);
    // Implémentez ici la logique de création de compte
  };

  const handleForgotPassword = () => {
    console.log('Forgot password');
    // Implémentez ici la logique de mot de passe oublié
  };
{/*<Router>
      <div className="container"> 
      <div className="form-image-container">
        <img src="/logo.png" alt="Logo" /> 
        </div>
        
        <Routes>
          <Route path="/" element={<SignInForm 
              onSignIn={handleSignIn} 
              onCreateAccount={handleCreateAccount} 
              onForgotPassword={handleForgotPassword} 
            />} />
          <Route path="/signup" element={<SignUpForm onCreateAccount={handleCreateAccount} />} />
          <Route path="/ForgetPassword" element={<ForgetPasswordForm onForgotPassword={handleForgotPassword} />} />
          <Route path="/home" element={<home />} />
        </Routes>
      </div>
          </Router> */}
  return ( 
    <>
    <div className="cont">
    <Home />
   </div>
   
    </>
  );
};

export default App;
