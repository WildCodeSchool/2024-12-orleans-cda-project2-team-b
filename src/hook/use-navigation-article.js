import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';

//function shared with nav button
export default function useNavigationArticle({ direction }) {
  const navigate = useNavigate();
  const { listFavourite, articleChosen, setArticleChosen } = useContext(ChoicesContext);
  const [isAvailable, setIsAvailable] = useState(false);

  //found the index of the article where we are
  const indexActual = listFavourite.findIndex((a) => a.article_id === articleChosen.article_id);
  const indexAsked = indexActual + direction;

  function handleDirection() {
    if (isAvailable) {
      setArticleChosen(listFavourite[indexAsked]);
      navigate(`/favoris-article-choisi/${listFavourite[indexAsked].article_id}`);
    }
  }

  useEffect(() => {
    //control if is the first or last article
    if (indexAsked < 0 || indexAsked >= listFavourite.length) {
      setIsAvailable(false);
    } else {
      setIsAvailable(true);
    }
  }, [indexActual, indexAsked, listFavourite]);

  return { handleDirection, isAvailable };
}
