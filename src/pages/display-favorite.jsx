import useDisplayArticle from '../hook/use-display-article';
import DisplayArticle from './display-article';
import './display-favorite.scss';

export default function DisplayFavorite() {
  const { article } = useDisplayArticle();

  return (
    <>
      <div className='article-container'>
        <DisplayArticle />
        <img className='background-article' src={article?.image_url} />
      </div>
    </>
  );
}
