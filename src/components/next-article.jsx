import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';

export default function NextArticle() {
  const navigate = useNavigate();
  const { listFavourite, articleChosen, setArticleChosen } = useContext(ChoicesContext);

  function handleNext() {
    //Chercher l'indice sur lequel on est + changer l'indice+1

    const indexActual = listFavourite.findIndex((a) => a.article_id === articleChosen.article_id);
    const indexAsked = indexActual + 1;
    console.log(indexAsked);

    //Afficher display article en envoyant l'index+1
    setArticleChosen(listFavourite[indexAsked]);
    navigate(`/favoris-article-choisi/${articleChosen.article_id}`);
  }
  return (
    <>
      <div onClick={handleNext}>suivant</div>
    </>
  );
}
