import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './results.scss';

export default function Results() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query') || ''; //

  const [data, setData] = useState(null);

  useEffect(() => {
    const getResults = async () => {
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/latest?apikey=pub_65230da8465946290c3170781460092e243d2&q=${encodeURIComponent(
            searchQuery,
          )}`,
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    getResults();
  }, [searchQuery]);

  return (
    <div>
      <h1>Résultats pour: {searchQuery}</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Chargement des résultats...</p>}
    </div>
  );
}
