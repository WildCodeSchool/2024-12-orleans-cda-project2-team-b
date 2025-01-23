import { Link } from 'react-router-dom';

import './search.scss';

export default function Search() {
  return (
    <>
      <p> Je suis la page de recherche</p>
      <Link to='resultats-de-recherche'>Résultats de recherche</Link>
      <Link to='oops'>Erreur de recherche</Link>

      <Link to='article-aleatoire'>Lien vers les articles Aléatoires</Link>
    </>
  );
}
