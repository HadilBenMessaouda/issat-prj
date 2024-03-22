import React from 'react';

  const NewsContainer = () => {
  return (
    <div className="news-container">
      <div className="news-panel">
        {/* Contenu du panneau des actualités */}
        <h2>Actualités</h2>
        <ul>
          <li>Actualité 1</li>
          <li>Actualité 2</li>
          <li>Actualité 3</li>
          {/* Ajoutez plus d'éléments d'actualités ici */}
        </ul>
      </div>
      <div className="advertisement">
        {/* Section de publicité ou d'autres informations */}
        <h2>Publicité</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};
export { NewsContainer };

