import { useContext } from 'react';

import { ChoicesContext } from '../contexts/choices-context';
import './like-button.scss';

export default function LikeButton({ article }) {
  const { addArticleToFavourite, listFavourite } = useContext(ChoicesContext);

  function handleClickLike(event) {
    //to not declenche the handleClickHistory or handleClickArticle
    event.stopPropagation();
    addArticleToFavourite(article);
  }

  return (
    <>
      <button className='button-like' type='button' onClick={handleClickLike}>
        {(article?.article_id ? listFavourite.findIndex((fav) => fav.article_id === article.article_id) : -1) === -1 ? (
          //darktheme =true use icons for dark
          // useDarkTheme ?  <img src='/icons/like-for-dark-empty.svg' alt='not-like' title='Ajouter aux favoris' /> : <img src='/icons/like-empty.svg' alt='not-like' title='Ajouter aux favoris' />

          // <img src={useDarkTheme? '/icons/like-for-dark-empty.svg':'/icons/like-empty.svg'} alt='not-like' title='Ajouter aux favoris' />
          <img src='/icons/like-empty.svg' alt='not-like' title='Ajouter aux favoris' />
        ) : (
          //<img src={useDarkTheme? '/icons/like-for-dark-full.svg':'/icons/like-full.svg'} alt='like' title='Retirer des favoris' />
          <img src='/icons/like-full.svg' alt='like' title='Retirer des favoris' />
        )}
      </button>
    </>
  );
}
