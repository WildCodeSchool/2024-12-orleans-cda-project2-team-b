import { useState } from 'react';
import { Link } from 'react-router-dom';

import { iconList } from './iconList';
import './navbar.scss';

export default function Navbar(props) {
  //console.log('mon chemin : ' + window.location.href);

  const [isActive, setIsActive] = useState(props.isActive);

  function handleClickPage() {
    setIsActive(() => window.location.href);
  }

  return (
    <>
      {/* Création de la navbar icone + texte */}
      <nav className='NavBar'>
        {iconList.map((icone) => (
          <Link key={icone} to={icone.link} onClick={handleClickPage}>
            {/* condition pour afficher icone active ou inactive selon la page affichée */}

            {window.location.pathname.endsWith(icone.link) ? (
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
