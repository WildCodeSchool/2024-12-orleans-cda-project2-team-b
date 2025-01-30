import { useEffect, useState } from 'react';

import './pop-up-question.scss';

//Si l'utilisateur répond oui on garde en mémoire sa réponse en local, donc prochaine ouverture ou F5 la pop-up ne se réaffiche pas
//Si il clique sur non alors au prochain F5 ou connexion pop-up réapparaît, mais prochaine page ne compte pas comme un F5 car react=single page
export function PopUpQuestion() {
  const [isOk, setIsOk] = useState(false);

  useEffect(() => {
    const storedChoice = localStorage.getItem('choice');
    if (storedChoice === 'yes') {
      setIsOk(true);
    }
  }, []);

  function handleChoice(value) {
    if (value === 'yes') {
      setIsOk(true);
      localStorage.setItem('choice', 'yes'); // Stocke "Oui" définitivement
    } else {
      setIsOk(true);
      sessionStorage.setItem('choice', 'no'); // Stocke "Non" temporairement
    }
  }

  ///////////////////////////////////////////////////////

  return (
    <div className={isOk ? 'pop-up-question-no-display' : 'pop-up-question'}>
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
