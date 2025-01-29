import { useState } from 'react';

import './pop-up-question.scss';

export function PopUpQuestion() {
  const [isCollected, setIsCollected] = useState(false);

  const handleClickYes = () => {
    setIsCollected(true);
  };

  const handleClickNo = () => {
    setIsCollected(false);
  };

  return (
    <div className={!isCollected ? 'pop-up-question' : 'pop-up-question-no-display'}>
      <h1>VOTRE EXPÉRIENCE, VOS CHOIX</h1>
      <p>
        Afin d’optimiser votre expérience, consentez-vous à l’enregistrement de vos articles favoris et de votre
        historique de consultation sur notre site afin de vous permettre de les retrouver lors de votre prochaine visite
        ?
      </p>

      <button className='button-yes' type='button' onClick={handleClickYes}>
        Oui
      </button>

      <button className='button-no' type='button' onClick={handleClickNo}>
        Non
      </button>
    </div>
  );
}
