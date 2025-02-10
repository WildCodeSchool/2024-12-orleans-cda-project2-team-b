// import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import LikeButton from '../components/like-button';
import { ChoicesContext } from '../contexts/choices-context';
import './display-article.scss';

export default function DisplayArticle() {
  const { articleTabl } = useContext(ChoicesContext);

  return (
    <>
      <div className='container-display-article'>
        <div className='container-display-contents'>
          <h2>{articleTabl.title}</h2>
          <h3>-{articleTabl.source_id}-</h3>
          {/* <div className='container-picture-text'> */}
          <img src={articleTabl.image_url} title='image article'></img>
          <p> {articleTabl.description}</p>
          {/* </div> */}
        </div>
        <div className='container-plus-like'>
          <a href={articleTabl.link} target='_blank' rel='noreferrer'>
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
