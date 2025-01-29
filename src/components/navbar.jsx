import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { iconList } from './icon-list';
import Modal from './modal';
import './navbar.scss';

export default function Navbar() {
  const location = useLocation(); //permet d'obtenir chemin dès qu'on change de page
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const toggleModal = () => {
    SetIsModalOpen(!isModalOpen);
  };
  return (
    <>
      {/* Création de la navbar icone + texte */}
      <nav className='navbar'>
        {iconList.map((icon) =>
          icon.isModaleTrigger ? (
            // Vérifie si c'est le bouton qui ouvre la modale
            <div
              key={icon.name}
              className='modal-trigger'
              onClick={toggleModal}
              onKeyDown={(e) => e.key === 'Enter' && toggleModal()}
              tabIndex={0} // Rendre focusable au clavier
              role='button' // Indiquer que cet élément agit comme un bouton
            >
              {/* Affiche l'icône active ou inactive */}
              <img src={isModalOpen ? icon.imgSrcOn : icon.imgSrcOff} alt={icon.name} title={icon.name} />
              <p>{icon.name}</p>
            </div>
          ) : (
            <Link key={icon.name} to={icon.link}>
              {/* Affiche l'icône active ou inactive, + gestion du "/" qui est dans tous les chemins mais seul = home*/}
              {location.pathname === icon.link || (icon.link !== '/' && location.pathname.includes(icon.link)) ? (
                <img src={icon.imgSrcOn} alt={icon.name} title={icon.name} />
              ) : (
                <img src={icon.imgSrcOff} alt={icon.name} title={icon.name} />
              )}
              <p>{icon.name}</p>
            </Link>
          ),
        )}
      </nav>
      {isModalOpen && (
        <Modal isShowing={isModalOpen} hide={toggleModal}>
          <h2>À propos de nous</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate fuga et sit sint dicta tempora,
            exercitationem perspiciatis reprehenderit blanditiis doloremque placeat numquam explicabo culpa, natus atque
            iure esse minima veniam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam maiores minima
            dicta in eligendi sed tempore vel est exercitationem magnam error similique dolorem recusandae accusantium
            facere, animi optio autem incidunt?
          </p>
        </Modal>
      )}
    </>
  );
}
