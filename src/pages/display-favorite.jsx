// import { useParams } from 'react-router-dom';
import DisplayArticle from './display-article';
import './display-favorite.scss';

export default function DisplayFavorite() {
  // const { id } = useParams();
  return (
    <>
      <div className='article-container'>
        <DisplayArticle />
        <img className='background-article' src='/example-article.png' />
      </div>
    </>
  );
}
