import { Link, useLocation } from 'react-router-dom';

import { iconList } from './icon-list';
import './navbar.scss';

export default function Navbar() {
  const location = useLocation(); //permet d'obtenir chemin dès qu'on change de page

  return (
    <>
      {/* Création de la navbar icone + texte */}
      <nav className='navbar'>
        {iconList.map((icon) => (
          <Link key={icon.name} to={icon.link}>
            {/* Affiche l'icône active ou inactive, + gestion du "/" qui est dans tous les chemins mais seul = home*/}
            {location.pathname === icon.link || (icon.link !== '/' && location.pathname.includes(icon.link)) ? (
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
