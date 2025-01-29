import './pop-up-question.scss';

export function PopUpQuestion() {
  return (
    <div className='pop-up-background'>
      <div className='pop-up-question'>
        <h1>VOTRE EXPÉRIENCE, VOS CHOIX</h1>
        <p>
          Afin d’optimiser votre expérience, consentez-vous à l’enregistrement de vos articles favoris et de votre
          historique de consultation sur notre site afin de vous permettre de les retrouver lors de votre prochaine
          visite ?
        </p>
        <button className='button-yes' type='button'>
          Oui
        </button>
        <button className='button-no' type='button'>
          Non
        </button>
      </div>
    </div>
  );
}
