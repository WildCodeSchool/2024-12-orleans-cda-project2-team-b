import './pop-up-question.scss';

export function PopUpQuestion() {
  return (
    <section className='pop-up-question'>
      <h1>VOTRE EXPÉRIENCE, VOS CHOIX</h1>
      <p>
        Afin d’optimiser votre expérience, consentez-vous à l’enregistrement de vos articles favoris et de votre
        historique de consultation sur notre site afin de vous permettre de les retrouver plus facilement lors d’une
        prochaine visite ?
      </p>
      <button className='button-yes'>Oui</button>
      <button className='button-no'>Non</button>
    </section>
  );
}
