import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';
import './button-nav-article.scss';

export function useNavigationArticle(direction) {
  const navigate = useNavigate();
  const { listFavourite, articleChosen, setArticleChosen } = useContext(ChoicesContext);
  const [isAvailable, setIsAvailable] = useState(false);
  //Chercher l'indice sur lequel on est + changer l'indice+1
  const indexActual = listFavourite.findIndex((a) => a.article_id === articleChosen.article_id);
  const indexAsked = indexActual + direction;

  function handleDirection() {
    if (isAvailable) {
      setArticleChosen(listFavourite[indexAsked]);
      navigate(`/favoris-article-choisi/${listFavourite[indexAsked].article_id}`);
    }
  }
  useEffect(() => {
    //controle si dernier article
    if (indexAsked < 0 || indexAsked >= listFavourite.length) {
      setIsAvailable(false);
    } else {
      setIsAvailable(true);
    }
  }, [indexActual, indexAsked, listFavourite]);

  return { handleDirection, isAvailable };
}

export function NextArticle() {
  const { handleDirection, isAvailable } = useNavigationArticle(1);

  return (
    <>
      <div onClick={handleDirection} className={isAvailable ? 'button-nav' : 'button-nav-disable'}>
        suivant <img className='icon-next' src='/icons/arrow-nav.svg' />
      </div>
    </>
  );
}

export function PreviousArticle() {
  const { handleDirection, isAvailable } = useNavigationArticle(-1);
  return (
    <>
      <div onClick={handleDirection} className={isAvailable ? 'button-nav' : 'button-nav-disable'}>
        <img className='icon-previous' src='/icons/arrow-nav.svg' /> précédent
      </div>
    </>
  );
}
