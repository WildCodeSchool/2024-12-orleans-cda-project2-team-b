import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';

//function shared with nav button
export default function useNavigationArticle({ direction, path }) {
  const navigate = useNavigate();
  const { listFavourite, listHistory, articleChosen, setArticleChosen, addArticleToHistory } =
    useContext(ChoicesContext);
  const [isAvailable, setIsAvailable] = useState(false);
  const [listPath, setListPath] = useState([]);
  const [linkNavigate, setLinkNavigate] = useState('');

  useEffect(() => {
    //Initialization depending where we are (favoris/histo/search/random)
    if (path.includes('favoris')) {
      setListPath(listFavourite.slice());
      setLinkNavigate('/favoris-article-choisi/');
    } else if (path.includes('historique')) {
      setListPath(listHistory.slice());
      setLinkNavigate('/historique-choisi/');
    }
  }, [listFavourite, listHistory, path]);

  //found the index of the article where we are
  const indexActual = listPath.findIndex((a) => a.article_id === articleChosen.article_id);
  const indexAsked = indexActual + direction;

  function handleDirection() {
    if (isAvailable) {
      setArticleChosen(listPath[indexAsked]);
      addArticleToHistory(listPath[indexAsked]);
      navigate(`${linkNavigate}${listPath[indexAsked].article_id}`);
    }
  }

  useEffect(() => {
    //control if is the first or last article
    if (indexAsked < 0 || indexAsked >= listPath.length) {
      setIsAvailable(false);
    } else {
      setIsAvailable(true);
    }
  }, [indexActual, indexAsked, listPath]);

  return { handleDirection, isAvailable };
}
