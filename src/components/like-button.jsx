import { useState } from 'react';

import './like-button.scss';

export default function LikeButton() {
  const [isLike, setIsLike] = useState(true);

  return (
    <>
      <div className='button-like'>
        {isLike ? (
          <button>
            <img src='/icons/like-full.svg' alt='like' title='Retirer des favoris' />
          </button>
        ) : (
          <button>
            <img src='/icons/like-empty.svg' alt='not-like' title='Ajouter aux favoris' />
          </button>
        )}
      </div>
    </>
  );
}
