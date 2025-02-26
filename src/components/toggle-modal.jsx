import { memberList } from '../data/member-list';
import ButtonLightDark from './button-light-dark';
import Modal from './modal';
import './toggle-modal.scss';

export default function ToggleModal({ isShowing, hide }) {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Modal isShowing={isShowing} hide={hide}>
      <section className='aboutSection'>
        <ButtonLightDark />

        <div className='aboutContent'>
          <h2>Présentation et but du projet :</h2>
          <p>
            Nous sommes trois étudiantes à la Wild Code School en formation Concepteur Développeur d&apos;Applications.
            Nous avons eu pour consigne de créer un site internet responsive se nourrissant d&apos;une API. Pour ce
            faire, nous avons utilisé une API de news et avons créé tout un projet autour de ce concept, allant de la
            modélisation, au choix des couleurs ou plus globalement du design pour une Direction Artistique que nous
            avons souhaité épurée — jusqu&apos;à la conception et la mise en production de notre application. <br />
            Nous espérons sincèrement que Wild&apos;s News et son concept sauront vous ravir.
          </p>
        </div>

        <div>
          <h2>Notre équipe</h2>
          <div className='membersInformations'>
            {memberList.map((member, index) => (
              <article key={index}>
                <img className='memberPicture' src={member.picture} alt={member.name} />
                <div className='name-link-group'>
                  <p>{member.name}</p>
                  <div className='linksButtons'>
                    <a href={member.github}>
                      <img className='icon-github' src='/icons/github.svg' alt={`Logo Github de ${member.name}`} />
                    </a>
                    <a href={member.linkedin}>
                      <img className='icon-linked' src='/icons/linkedin.svg' alt={`Logo Linkedin de ${member.name}`} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Modal>
  );
}
