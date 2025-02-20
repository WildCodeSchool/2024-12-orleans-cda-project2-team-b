//useNavigation is available only for Favoris and Search
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';

export default function useNavigationArticle({ direction, tablNav, pathNav }) {
  const navigate = useNavigate();
  const { articleChosen, setArticleChosen, addArticleToHistory } = useContext(ChoicesContext);
  const [isAvailable, setIsAvailable] = useState(false);

  //find the index of article in display to navigate
  const indexActuel = tablNav.findIndex((a) => a.article_id === articleChosen.article_id);
  const indexAsked = indexActuel + direction;

  // check if is first or last article in the tabl to not display component
  useEffect(() => {
    if (tablNav) {
      if (indexAsked >= 0 && indexAsked < tablNav.length) {
        setIsAvailable(true);
      } else {
        setIsAvailable(false);
      }
    } else {
      setIsAvailable(false);
    }
  }, [articleChosen, direction, tablNav, indexActuel, indexAsked]);

  // create function to navigate
  function handleDirection() {
    if (tablNav[indexAsked]) {
      setArticleChosen(tablNav[indexAsked]);
      addArticleToHistory(tablNav[indexAsked]);
      navigate(`${pathNav}${tablNav[indexAsked].article_id}`, { state: { tablNav, pathNav } });
    }
  }

  return { handleDirection, isAvailable };
}
