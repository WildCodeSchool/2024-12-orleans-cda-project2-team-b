import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { ButtonNav } from '../components/button-nav-article';
import { ChoicesContext } from '../contexts/choices-context';
import DisplayArticle from './display-article';
import './display-favorite.scss';

export default function DisplayFavorite() {
  const { articleChosen } = useContext(ChoicesContext);
  const location = useLocation();

  return (
    <>
      <div className='article-container'>
        <DisplayArticle />
        {location.pathname.includes('favoris') && <img className='background-article' src={articleChosen.image_url} />}
      </div>
      <div className='nav-article'>
        <ButtonNav direction={-1} classIcon='icon-previous' texte='précédent' path={location.pathname} />
        <ButtonNav direction={1} classIcon='icon-next' texte='suivant' path={location.pathname} />
      </div>
    </>
  );
}
