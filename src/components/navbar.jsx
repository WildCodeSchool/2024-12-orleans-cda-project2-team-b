import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { iconList } from './icon-list';
import './navbar.scss';
import ToggleModal from './toggle-modal';

export default function Navbar() {
  const location = useLocation();
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const toggleModal = () => {
    SetIsModalOpen(!isModalOpen);
  };
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Création de la navbar icone + texte */}
      <nav className='navbar'>
        {iconList.map((icon) =>
          icon.isModalTrigger ? (
            <div
              key={icon.name}
              className='modal-trigger'
              onClick={toggleModal}
              onKeyDown={(e) => e.key === 'Enter' && toggleModal()}
              tabIndex={0}
              // biome-ignore lint/a11y/useSemanticElements: <explanation>
              role='button'
            >
              {/* Affiche l'icône active ou inactive */}
              <img src={isModalOpen ? icon.imgSrcOn : icon.imgSrcOff} alt={icon.name} title={icon.name} />
              <p>{icon.name}</p>
            </div>
          ) : (
            <Link key={icon.name} to={icon.link}>
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

      {/* Utilisation du composant ToggleModal */}
      {isModalOpen && <ToggleModal isShowing={isModalOpen} hide={toggleModal} openInNewTab={openInNewTab} />}
    </>
  );
}
