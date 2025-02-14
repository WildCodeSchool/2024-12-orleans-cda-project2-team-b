import { useContext, useState } from 'react';

import { ChoicesContext } from '../contexts/choices-context';
import './like-button.scss';

export default function LikeButton({ article }) {
  const [isLike, setIsLike] = useState(false);
  const { addArticleToFavourite } = useContext(ChoicesContext);

  function handleClickLike(event) {
    //to not declenche the handleClickHistory or handleClickArticle
    event.stopPropagation();
    addArticleToFavourite(article);
    setIsLike((prev) => !prev);
  }

  return (
    <>
      <button className='button-like' type='button' onClick={handleClickLike}>
        <img
          src={isLike ? '/icons/like-full.svg' : '/icons/like-empty.svg'}
          alt={isLike ? 'like' : 'not-like'}
          title={isLike ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        />
      </button>
    </>
  );
}
