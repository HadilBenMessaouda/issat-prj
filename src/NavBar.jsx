import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="search-bar">Barre de recherche</div>
      <div className="nav-buttons">
        <button>Actualités</button>
        <button>Emploi</button>
        <button>Cours</button>
        <button>Notes</button>
      </div>
    </nav>
  );
};

export default NavBar;
