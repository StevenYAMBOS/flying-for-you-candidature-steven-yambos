/*
CONTEXTE :
Ce composant représente l'en-tête (header) de l'application, affiché en haut de chaque page (ici il n'y en à qu'1).
Il contient le logo de l'application, une image en background de FFY et un texte de présentation.
*/



import React from 'react';

const MyHeader = () => {
  return (
    <header className='myHeader'>
      {/* Logo */}
      <div className='logo-container'>
        <img src='/images/FFY_logo.webp' id='logo' alt='logo Flying For You' />
      </div>
      {/* Texte */}
      <div className='job-post'>
        <span>Candidature</span>
        <br></br>
        <p>Développeur Full Stack H/F - Alternance</p>
      </div>
    </header>
  );
};

export default MyHeader;
