import { useEffect, useState } from 'react';

import './navigation.scss';

export default function Navigation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const apiKey = import.meta.env.VITE_API_KEY;

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < articles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch({ apiKey }) // Remplacez par votre URL d'API
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div>
      {articles.length > 0 && (
        <div>
          <h2>{articles[currentIndex].title}</h2>
          <p>{articles[currentIndex].content}</p>
        </div>
      )}
      <button type='button' onClick={handlePrevClick} disabled={currentIndex === 0}>
        Précédent
      </button>
      <button type='button' onClick={handleNextClick} disabled={currentIndex === articles.length - 1}>
        Suivant
      </button>
    </div>
  );
}
