// import { Link, Outlet } from 'react-router-dom';
import tiktok from '../assets/Tiktokimg.png';
import './article-result.scss';

export default function ArticleResult() {
  //   const historyId = 567;
  return (
    <div className='results-container'>
      <p>Des « réfugiés » américains de TikTok adoptent une autre application chinoise</p>
      <img src={tiktok} alt="photo de l'article" />
      <div className='under-image-results'>
        <button>Likebuttontest</button>
        {/* <LikeButton /> */}
        <span>Source article</span>
      </div>
    </div>
  );
}
