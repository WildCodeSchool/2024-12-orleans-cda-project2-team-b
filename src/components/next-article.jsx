import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';
import './button-nav-article.scss';

export function NextArticle() {
  const navigate = useNavigate();
  const { listFavourite, articleChosen, setArticleChosen } = useContext(ChoicesContext);
  const [nextIsAvailable, setNextIsAvailable] = useState(false);
  //Chercher l'indice sur lequel on est + changer l'indice+1
  const indexActual = listFavourite.findIndex((a) => a.article_id === articleChosen.article_id);
  const indexAsked = indexActual + 1;

  function handleNext() {
    if (nextIsAvailable) {
      setArticleChosen(listFavourite[indexAsked]);
      //Afficher display article en envoyant l'index+1
      navigate(`/favoris-article-choisi/${articleChosen.article_id}`);
    }
  }

  useEffect(() => {
    //controle si dernier article
    if (indexActual === listFavourite.length - 1) {
      setNextIsAvailable(false);
    } else {
      setNextIsAvailable(true);
    }
  }, [indexActual, listFavourite]);

  return (
    <>
      <div onClick={handleNext} className={nextIsAvailable ? 'button-nav' : 'button-nav-disable'}>
        suivant <img className='icon-next' src='/icons/arrow-nav.svg' />
      </div>
    </>
  );
}

export function PreviousArticle() {
  const navigate = useNavigate();
  const { listFavourite, articleChosen, setArticleChosen } = useContext(ChoicesContext);
  const [previousIsAvailable, setPreviousIsAvailable] = useState(false);
  //Chercher l'indice sur lequel on est + changer l'indice+1
  const indexActual = listFavourite.findIndex((a) => a.article_id === articleChosen.article_id);
  const indexAsked = indexActual - 1;

  function handlePrevious() {
    if (previousIsAvailable) {
      setArticleChosen(listFavourite[indexAsked]);
      navigate(`/favoris-article-choisi/${articleChosen.article_id}`);
    }
  }

  useEffect(() => {
    //controle si premier article
    if (indexActual === 0) {
      setPreviousIsAvailable(false);
    } else {
      setPreviousIsAvailable(true);
    }
  }, [indexActual, listFavourite]);

  return (
    <>
      <div onClick={handlePrevious} className={previousIsAvailable ? 'button-nav' : 'button-nav-disable'}>
        <img className='icon-previous' src='/icons/arrow-nav.svg' /> précédent
      </div>
    </>
  );
}
