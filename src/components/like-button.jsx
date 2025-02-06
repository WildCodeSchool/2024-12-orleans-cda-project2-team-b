import { useState } from 'react';

import './like-button.scss';

export default function LikeButton() {
  const [isLike, setIsLike] = useState(false);

  function handleClickLike() {
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
