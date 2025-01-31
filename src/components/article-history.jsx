// import { Link, Outlet } from 'react-router-dom';
import './article-history.scss';

export default function ArticleHistory() {
  //   const historyId = 567;
  return (
    <>
      <div className='article-history'>
        <div className='title-like-history'>
          <h3>I Robot, le remplacement.</h3>
          <button>Likebuttontest</button>
          {/* <LikeButton /> */}
        </div>
        <p>
          Le 28 Septembre 2024, la société Tesla a placé son robot Blallablabla kdfkjn zefruouejvnb zehfnjunv
          zekfuhhoujbven euihfujzb zeofruhouevn erofunhoeur erghnouenvgrgver ...{' '}
        </p>
      </div>

      {/* <Link to={`article-historique/${historyId}`}>Lien d histo selected</Link>
      <Link to='pas-d-historique'>Pas d historique</Link> */}
      {/* <Outlet /> */}
    </>
  );
}
