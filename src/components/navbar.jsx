import { Link } from 'react-router-dom';

import './navbar.scss';
import { iconList } from './iconList';

export default function Navbar() {
  return (
    <>
{/* Création de la navbar icone + texte */}
      <nav className="NavBar">
          {iconList.map((icone) => (

              <Link key={icone} to={icone.link}>

                <img src={icone.imgSrc} width={30}/>
                {icone.name}

              </Link>

          ))}
      </nav>


{/* Ajouter la logique de l'insertion de la modale de "à propos de nous." */}


    </>
  );
}

