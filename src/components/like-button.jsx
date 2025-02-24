import { useContext } from 'react';

import { ChoicesContext } from '../contexts/choices-context';
import { useDarkTheme } from '../contexts/dark-theme-context';
import './like-button.scss';

export default function LikeButton({ articleChosen2 }) {
  const { addArticleToFavourite, listFavourite } = useContext(ChoicesContext);
  const { darkTheme } = useDarkTheme();

  function handleClickLike(event) {
    //to not declenche the handleClickHistory or handleClickArticle
    event.stopPropagation();
    addArticleToFavourite(articleChosen2);
  }

  return (
    <>
      <button className='button-like' type='button' onClick={handleClickLike}>
        {(articleChosen2?.article_id
          ? listFavourite.findIndex((fav) => fav.article_id === articleChosen2.article_id)
          : -1) === -1 ? (
          <img
            src={darkTheme ? '/icons/like-for-dark-empty.svg' : '/icons/like-empty.svg'}
            alt='not-like'
            title='Ajouter aux favoris'
          />
        ) : (
          <img
            src={darkTheme ? '/icons/like-for-dark-full.svg' : '/icons/like-full.svg'}
            alt='like'
            title='Retirer des favoris'
          />
        )}
      </button>
    </>
  );
}
