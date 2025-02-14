import { useContext } from 'react';

import { ChoicesContext } from '../contexts/choices-context';
import './like-button.scss';

export default function LikeButton({ article }) {
  // const [isLike, setIsLike] = useState(false);
  const { addArticleToFavourite, listFavourite } = useContext(ChoicesContext);

  function handleClickLike(event) {
    //to not declenche the handleClickHistory or handleClickArticle
    event.stopPropagation();
    addArticleToFavourite(article);
  }

  return (
    <>
      <button className='button-like' type='button' onClick={handleClickLike}>
        {article?.article_id && listFavourite.findIndex((fav) => fav.article_id === article.article_id) === -1 ? (
          <img src='/icons/like-empty.svg' alt='not-like' title='Ajouter aux favoris' />
        ) : (
          <img src='/icons/like-full.svg' alt='like' title='Retirer des favoris' />
        )}
      </button>
    </>
  );
}
