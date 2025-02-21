//useNavigation is available only for Favoris and Search
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';

export default function useNavigationArticle({ direction, tableNav, pathNav }) {
  const navigate = useNavigate();
  const { articleChosen, setArticleChosen, addArticleToHistory } = useContext(ChoicesContext);
  let isAvailable = false;

  //Check if tableNav is empty for the history case for example
  if (!tableNav || tableNav.length === 0) {
    return { handleDirection: () => {}, isAvailable: false };
  }

  //find the index of article in display to navigate
  const indexActuel = tableNav.findIndex((a) => a.article_id === articleChosen.article_id);
  const indexAsked = indexActuel + direction;

  // check if is first or last article in the table to not display component
  isAvailable = tableNav && indexAsked >= 0 && indexAsked < tableNav.length;

  // create function to navigate
  function handleDirection() {
    if (tableNav[indexAsked]) {
      setArticleChosen(tableNav[indexAsked]);
      addArticleToHistory(tableNav[indexAsked]);
      navigate(`${pathNav}${tableNav[indexAsked].article_id}`, { state: { tableNav, pathNav } });
    }
  }

  return { handleDirection, isAvailable };
}
