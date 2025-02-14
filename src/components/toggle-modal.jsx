import PropTypes from 'prop-types';

import { memberList } from '../data/member-list';
import ButtonLightDark from './button-light-dark';
import Modal from './modal';
import './toggle-modal.scss';

export default function ToggleModal({ isShowing, hide, openInNewTab }) {
  return (
    <Modal isShowing={isShowing} hide={hide}>
      <section className='aboutSection'>
        <ButtonLightDark />
        <div className='aboutContent'>
          <h2>Présentation et but du projet :</h2>
          <p>
            Nous sommes trois étudiantes à la Wild Code School en cursus de Concepteur Développeur d&apos;Applications.
            Nous avons eu pour consigne de créer un site internet responsive se nourrissant d&apos;une API. Pour ce
            faire, nous avons utilisé une API de news et avons créé tout un projet autour de ce concept, allant de la
            maquetisation, au choix des couleurs ou plus globalement du design pour une Direction Artistique que nous
            avons souhaité épurée — jusqu&apos;à la conception et la mise en production de notre application. <br />
            Nous espérons sincèrement que Wild&apos;s News et son concept sauront vous ravir.
          </p>
        </div>
        <div>
          <h2>Notre équipe</h2>
          <div className='membersInformations'>
            {memberList.map((member, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <article key={index}>
                <img className='memberPicture' src={member.picture} alt={member.name} />
                <p>{member.name}</p>
                <div className='linksButtons'>
                  <img
                    className='icon-github'
                    src='/icons/github.svg'
                    alt='Logo Github'
                    onClick={() => openInNewTab(member.github)}
                    onKeyDown={(e) => e.key === 'Enter'}
                    style={{ cursor: 'pointer' }}
                  />
                  <img
                    className='icon-linked'
                    src='/icons/linkedin.svg'
                    alt='Logo Linkedin'
                    onClick={() => openInNewTab(member.linkedin)}
                    onKeyDown={(e) => e.key === 'Enter'}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Modal>
  );
}

ToggleModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  openInNewTab: PropTypes.func.isRequired,
};
