/*
CONTEXTE :
Ce composant représente le pied de page (footer) de l'application, affiché en bas de chaque page.
Il contient les informations de contact essentielles, telles que mon numéro de téléphone, mon adresse e-mail,
mon adresse, ainsi que des liens vers mes réseaux sociaux.
*/



import React from 'react';

const MyFooter = () => {
  return (
    <footer className='myFooter'>
      {/* Titre */}
      <div className='footer-container'>
        <h4>Contact</h4>
        <span>(+33) 6 16 45 60 12</span>
        <span>stevenyambos@gmail.com</span>
        <span>Paris 12, Île-de-France</span>

      <div className="social-medias">
        <img src='../images/linkedin.svg' />
        <img src='../images/github.svg' />
        <img src='../images/twitter_x.svg' />
      </div>

      <div className='copyright'>
      © Flying For You Candidature Steven YAMBOS - 2023
      </div>
      </div>
    </footer>
  );
};

export default MyFooter;
