import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { iconList } from './icon-list';
import './navbar.scss';

export default function Navbar() {
  const [namePath, setNamePath] = useState('');
  const location = useLocation(); // récupère le chemin actuel, pas besoin de déclenchement au clic

  // Mise à jour de namePath dès qu'on change de page, pathname affiche exemple : "/favoris"
  useEffect(() => {
    setNamePath(location.pathname);
  }, [location]);

  return (
    <>
      {/* Création de la navbar icone + texte */}
      <nav className='NavBar'>
        {iconList.map((icone) => (
          <Link key={icone.name} to={icone.link}>
            {/* Affiche l'icône active ou inactive, relou car le "/" est dans tous les chemins du coup faut faire une double condi*/}
            {/* !!!Attention les pages recherches aleatoire et erreur n'ont pas "/recherche" dans leur chemin, il faurdrait faire cette modif */}
            {namePath === icone.link || (icone.link !== '/' && namePath.includes(icone.link)) ? (
              <img src={icone.imgSrcOn} alt={icone.name} title={icone.name} />
            ) : (
              <img src={icone.imgSrcOff} alt={icone.name} title={icone.name} />
            )}

            <p>{icone.name}</p>
          </Link>
        ))}
      </nav>

      {/* Ajouter la logique de l'insertion de la modale de "à propos de nous." */}
    </>
  );
}
