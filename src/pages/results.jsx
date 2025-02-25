import { Navigate } from 'react-router-dom';

import ResultsList from '../components/results-list';
import useDisplayListResult from '../hook/use-display-list-result';
import './results.scss';

export default function Results() {
  const { listSearch, searchValue, isLoading, isRandom, isTooManyRequest } = useDisplayListResult();

  if (!searchValue) {
    return (
      <div className='container-results'>
        <Navigate to='/recherche' />
      </div>
    );
  }

  if (isLoading) {
    return <p>Chargement en cours...</p>;
  }

  if (!listSearch || listSearch.length === 0) {
    return <Navigate to='/recherche-oops' />;
  }

  return (
    <div className='container-results'>
      {isTooManyRequest ? (
        <p className='texte-results'>Désolé, trop de requêtes ont été demandées, ré-essayez dans 15 minutes.</p>
      ) : (
        <>
          <p className='texte-results'>
            {isRandom
              ? `Nous vous proposons une recherche 🎲 pour : "${searchValue}"`
              : `${listSearch.length} article(s) ont été trouvé(s) avec votre recherche : "${searchValue}"`}
          </p>
          <ResultsList tableNav={listSearch} pathNav='/recherche-article-choisi/' />
        </>
      )}
    </div>
  );
}
