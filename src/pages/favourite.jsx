import { useContext } from 'react';

import ResultsList from '../components/results-list';
import { ChoicesContext } from '../contexts/choices-context';
import './favourite.scss';
import NoFavourite from './no-favourite';
import './results.scss';

export default function Favourite() {
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
  );
}
