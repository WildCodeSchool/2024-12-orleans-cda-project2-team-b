import { useContext } from 'react';

import ResultsList from '../components/results-list';
// import { Link } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';
import './favourite.scss';
import NoFavourite from './no-favourite';
import './results.scss';

export default function Favourite() {
  // const articleId = 123; // Example dynamic ID (this could come from props, state, or API data)
  const { listFavourite } = useContext(ChoicesContext);

  return (
    <>
      {listFavourite.length > 0 ? (
        <>
          <p>Vous avez {listFavourite.length} 💙 dans votre liste. </p>
          <div className='article-result-wrap'>
            {listFavourite.map((article, index) => (
              <ResultsList key={index} article={article} />
            ))}
          </div>
        </>
      ) : (
        <NoFavourite />
      )}
    </>

    // <Link to={`/favoris-article/${articleId}`}>Favori sélectionné</Link>
  );
}
