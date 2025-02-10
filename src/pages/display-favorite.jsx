// import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import { ChoicesContext } from '../contexts/choices-context';
import DisplayArticle from './display-article';
import './display-favorite.scss';

export default function DisplayFavorite() {
  const { articleTabl } = useContext(ChoicesContext);
  // const { id } = useParams();
  return (
    <>
      <div className='article-container'>
        <DisplayArticle />
        <img className='background-article' src={articleTabl.image_url} />
      </div>
    </>
  );
}
