import { Link } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
  return (
    <>
      <Link to='/'>Accueil</Link>
      <Link to='/recherche'>Recherche</Link>
      <Link to='/favoris'>Favoris</Link>
      <Link to='/historique'>Historique</Link>
      {/* Ajouter la logique de l'insertion de la modale de "à propos de nous." */}
    </>
  );
}
