// import { useParams } from 'react-router-dom';
import LikeButton from '../components/like-button';
import './display-history.scss';

export default function DisplayHistory() {
  // const { id } = useParams();
  return (
    <>
      <div className='container-display-history'>
        <div className='container-display-contents'>
          <h2>Des « réfugiés » américains de TikTok adoptent une autre application chinoise</h2>
          <h3>La presse CA</h3>
          {/* <div className='container-picture-text'> */}
          <img src='/example-article.png' alt='image_article' title='image article'></img>
          <p>
            De nombreux créateurs de contenus et utilisateurs américains ont rejoint Xiaohongshu (« Petit Livre Rouge
            »), une application chinoise similaire à Instagram, se présentant parfois comme des « réfugiés » de TikTok,
            propriété du groupe chinois ByteDance, qui pourrait être interdite à partir de dimanche aux États-Unis.
          </p>
          {/* </div> */}
        </div>
        <div className='container-plus-like'>
          <a href='#'>Article complet</a>
          <LikeButton />
        </div>
      </div>
      <div className='button-after'>précédent</div>
      <div className='button-before'>suivant</div>
    </>
  );
}
