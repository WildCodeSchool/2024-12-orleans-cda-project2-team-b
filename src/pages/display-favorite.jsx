// import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import { ChoicesContext } from '../contexts/choices-context';
import DisplayArticle from './display-article';
import './display-favorite.scss';

export default function DisplayFavorite() {
  const { articleChosen } = useContext(ChoicesContext);
  // const { id } = useParams();
  return (
    <>
      <div className='article-container'>
        <DisplayArticle />
        <img className='background-article' src={articleChosen.image_url} />
      </div>
    </>
  );
}
