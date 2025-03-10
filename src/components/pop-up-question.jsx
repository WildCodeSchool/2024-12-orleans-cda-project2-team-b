import { useContext, useEffect, useState } from 'react';

import { ChoicesContext } from '../contexts/choices-context';
import './pop-up-question.scss';

export function PopUpQuestion() {
  const { choiceLocalStorage, updateChoiceLocalStorage } = useContext(ChoicesContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (choiceLocalStorage !== 'yes') {
      setTimeout(() => {
        setIsVisible(true);
      }, 400);
    }
  }, [choiceLocalStorage]);

  function handleChoice(value) {
    setIsVisible(false);
    if (value === 'yes') {
      updateChoiceLocalStorage('yes');
    }
  }

  return (
    <div className={!isVisible ? 'pop-up-question-no-display' : `pop-up-question ${isVisible ? 'show' : ''}`}>
      <h1>VOTRE EXPÉRIENCE, VOS CHOIX</h1>
      <p>
        Afin d’optimiser votre expérience, consentez-vous à l’enregistrement de vos articles favoris et de votre
        historique de consultation sur notre site afin de vous permettre de les retrouver lors de votre prochaine visite
        ?
      </p>

      <button className='button-yes' type='button' onClick={() => handleChoice('yes')}>
        Oui
      </button>

      <button className='button-no' type='button' onClick={() => handleChoice('no')}>
        Non
      </button>
    </div>
  );
}
