import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { iconList } from './icon-list';
import { memberList } from './member-list';
import Modal from './modal';
import './navbar.scss';

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
          icon.isModaleTrigger ? (
            <div
              key={icon.name}
              className='modal-trigger'
              onClick={toggleModal}
              onKeyDown={(e) => e.key === 'Enter' && toggleModal()}
              tabIndex={0}
              // Ignore la règle pour l'exception et le style spécifique à donner qui ne s'applique pas à un <bouton> classique.
              // biome-ignore lint/a11y/useSemanticElements: <explanation>
              role='button'
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
      {/* Affichele la modale et son contenu*/}
      {isModalOpen && (
        <Modal isShowing={isModalOpen} hide={toggleModal}>
          <section>
            <div>
              <h2>Présentation et but du projet :</h2>
              <p>
                Nous sommes trois étudiantes à la Wild Code School en cursus de Concepteur Développeur
                d&apos;Applications. Nous avons eu pour consigne de créer un site internet responsive se nourrissant
                d&apos;une API. Pour ce faire, nous avons utilisé une API de news et avons créé tout un projet autour de
                ce concept, allant de l&apos; à la maquetisation, au choix des couleurs ou plus globalement du design
                pour une Direction Artistique que nous avons souhaité épurée — jusqu&apos;à la conception et la mise en
                production de notre application. <br />
                Nous espérons sincèrement que Wild&apos;s News et son concept sauront vous ravir.
              </p>
            </div>
            <div>
              <h2>Notre équipe</h2>
              <div>
                {memberList.map((member, index) => (
                  <article key={index}>
                    <img src={member.picture} alt={member.name} />
                    <p>{member.name}</p>
                    <div>
                      <img
                        key={member}
                        src='../../public/icons/github.svg'
                        alt='Logo Github'
                        onClick={() => openInNewTab(member.github)}
                        onKeyDown={(e) => e.key === 'Enter'}
                        style={{ cursor: 'pointer' }}
                      />
                      <img
                        key={member}
                        src='../../public/icons/linkedin.svg'
                        alt='Logo Linkedin'
                        onClick={() => openInNewTab(member.linkedin)}
                        onKeyDown={(e) => e.key === 'Enter'}
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                  </article>
                ))}
              </div>
              {/* <article>
                <p>Chloé</p>
              </article>
              <article>
                <p>Mélissa</p>
              </article>
              <article>
                <img src='../../public/images/template-picture.svg' alt='Océane' />
                <p>Océane</p>
                <div>
                  <img
                    src='../../public/icons/github.svg'
                    alt='Logo GitHub'
                    onClick={() => openInNewTab('https://github.com/ThisIsHowVillainsAreMade')}
                    onKeyDown={(e) => e.key === 'Enter'}
                    style={{ cursor: 'pointer' }}
                  />
                  <img
                    src='../../public/icons/linkedin.svg'
                    alt='Logo LinkedIn'
                    onClick={() => openInNewTab('https://www.linkedin.com/in/oaiw/')}
                    onKeyDown={(e) => e.key === 'Enter'}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </article> */}
            </div>
          </section>
        </Modal>
      )}
    </>
  );
}
