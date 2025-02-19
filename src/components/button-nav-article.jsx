import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';
import './button-nav-article.scss';

//function shared with nav button
export function useNavigationArticle({ direction }) {
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

export function ButtonNav({ direction, classIcon, texte }) {
  const { handleDirection, isAvailable } = useNavigationArticle({ direction });
  return (
    <>
      <div onClick={handleDirection} className={isAvailable ? 'button-nav' : 'button-nav-disable'}>
        {direction === 1 ? (
          <>
            {texte} <img className={classIcon} src='/icons/arrow-nav.svg' />
          </>
        ) : (
          <>
            <img className={classIcon} src='/icons/arrow-nav.svg' /> {texte}
          </>
        )}
      </div>
    </>
  );
}
