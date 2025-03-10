import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { iconList } from '../data/icon-list';
import MainTitle from './main-title';
import './navbar.scss';
import ToggleModal from './toggle-modal';

export default function Navbar() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav className='navbar'>
        {iconList.map((icon) =>
          icon.isModalTrigger ? (
            <div
              key={icon.name}
              className='modal-trigger'
              onClick={toggleModal}
              onKeyDown={(e) => e.key === 'Enter' && toggleModal()}
              tabIndex={0}
              role='button'
            >
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
      <div>
        <MainTitle />
      </div>

      {isModalOpen && <ToggleModal isShowing={isModalOpen} hide={toggleModal} />}
    </>
  );
}
