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
        {iconList.map((icon) => (
          <Link key={icon.name} to={icon.link}>
            {/* Affiche l'icône active ou inactive, + gestion du "/" qui est dans tous les chemins mais seul = home*/}
            {namePath === icon.link || (icon.link !== '/' && namePath.includes(icon.link)) ? (
              <img src={icon.imgSrcOn} alt={icon.name} title={icon.name} />
            ) : (
              <img src={icon.imgSrcOff} alt={icon.name} title={icon.name} />
            )}

            <p>{icon.name}</p>
          </Link>
        ))}
      </nav>

      {/* Ajouter la logique de l'insertion de la modale de "à propos de nous." */}
    </>
  );
}
