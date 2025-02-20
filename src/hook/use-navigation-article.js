import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';

export default function useNavigationArticle({ direction, tablNav, pathNav }) {
  const navigate = useNavigate();
  const { articleChosen, setArticleChosen, addArticleToHistory } = useContext(ChoicesContext);
  const [isAvailable, setIsAvailable] = useState(false);

  // Vérification que tablNav est défini et que articleChosen a un article_id
  useEffect(() => {
    if (tablNav && Array.isArray(tablNav) && articleChosen?.article_id) {
      const indexActuel = tablNav.findIndex((a) => a.article_id === articleChosen.article_id);
      const indexAsked = indexActuel + direction;

      // Vérifier que indexAsked est valide
      if (indexAsked >= 0 && indexAsked < tablNav.length) {
        setIsAvailable(true);
      } else {
        setIsAvailable(false);
      }
    } else {
      setIsAvailable(false);
    }
  }, [articleChosen, direction, tablNav]);

  // Fonction de navigation
  function handleDirection() {
    if (!isAvailable || !tablNav) return; // Si isAvailable est false ou tablNav est invalide, on ne fait rien

    const indexActuel = tablNav.findIndex((a) => a.article_id === articleChosen?.article_id);
    const indexAsked = indexActuel + direction;

    if (tablNav[indexAsked]) {
      setArticleChosen(tablNav[indexAsked]);
      addArticleToHistory(tablNav[indexAsked]);
      navigate(`${pathNav}${tablNav[indexAsked].article_id}`, { state: { tablNav, pathNav } });
    }
  }

  return { handleDirection, isAvailable };
}
