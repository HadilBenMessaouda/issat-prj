// Home.jsx
import React from 'react';
import NavBar from './NavBar'; // Import du composant de la barre de navigation
import {NewsContainer} from './NewsContainer'; 
import  './Home.css'; // Import du fichier CSS
const Home = () => {
  return (
    <div >
      <NavBar /> {/* Affichage de la barre de navigation */}
      <NewsContainer /> {/* Affichage du contenu principal des actualités */}
    </div>
  );
};

export default Home;


