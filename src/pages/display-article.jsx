// import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import LikeButton from '../components/like-button';
import { ChoicesContext } from '../contexts/choices-context';
import './display-article.scss';

export default function DisplayArticle() {
  const { articleChosen } = useContext(ChoicesContext);

  return (
    <>
      <div className='container-display-article'>
        <div className='container-display-contents'>
          <h2>{articleChosen.title}</h2>
          <h3>-{articleChosen.source_id}-</h3>
          {/* <div className='container-picture-text'> */}
          <img src={articleChosen.image_url} title='image article'></img>
          <p> {articleChosen.description}</p>
          {/* </div> */}
        </div>
        <div className='container-plus-like'>
          <a href={articleChosen.link} target='_blank' rel='noreferrer'>
            Article complet
          </a>
          <LikeButton />
        </div>
      </div>
      <div className='button-after'>précédent</div>
      <div className='button-before'>suivant</div>
    </>
  );
}
