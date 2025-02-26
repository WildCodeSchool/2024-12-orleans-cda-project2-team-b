import { useContext } from 'react';

import { ChoicesContext } from '../contexts/choices-context';
import { useDarkTheme } from '../contexts/dark-theme-context';
import './like-button.scss';

export default function LikeButton({ articleChosen }) {
  const { addArticleToFavourite, listFavourite } = useContext(ChoicesContext);
  const { darkTheme } = useDarkTheme();
  const isLiked = listFavourite.some((fav) => fav.article_id === articleChosen?.article_id);
  const BASE_URL = import.meta.env.BASE_URL;

  function handleClickLike(event) {
    if (articleChosen) {
      //to not declenche the handleClickHistory or handleClickArticle
      event.stopPropagation();
      addArticleToFavourite(articleChosen);
    }
  }

  return (
    <>
      <button className='button-like' type='button' onClick={handleClickLike}>
        {
          <img
            src={
              darkTheme
                ? isLiked
                  ? `${BASE_URL}icons/like-for-dark-full.svg`
                  : `${BASE_URL}icons/like-for-dark-empty.svg`
                : isLiked
                ? `${BASE_URL}icons/like-full.svg`
                : `${BASE_URL}icons/like-empty.svg`
            }
            alt={isLiked ? 'like' : 'not-like'}
            title={isLiked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          />
        }
      </button>
    </>
  );
}
