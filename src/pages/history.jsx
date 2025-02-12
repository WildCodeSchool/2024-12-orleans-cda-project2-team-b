import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import ArticleHistory from '../components/article-history';
import LikeButton from '../components/like-button';
import { ChoicesContext } from '../contexts/choices-context';
import './history.scss';

export default function History({ article }) {
  const { listHistory, setArticleChosen, choiceLocalStorage, setListHistory, setHourHistory, hourHistory } =
    useContext(ChoicesContext);
  const navigate = useNavigate();

  function handleClickHistory(article) {
    setArticleChosen(article);

    // If user say yes to save his data, we keep in memory consulted articles for the history
    if (choiceLocalStorage === 'yes') {
      if (listHistory.length >= 10) {
        setListHistory(listHistory.slice(-9));
      }
      const hour = new Date().getTime();
      setHourHistory(hour);
      setListHistory((prev) => [...prev, { ...article, hourConsulted: hour }]);
    }
    navigate(`/historique-choisi`);
  }

  // const hour = new Date().getTime(); // Obtenir l'heure actuelle

  // setListHistory((prev) => [...prev, { ...article, hourConsulted: hour }]);

  return (
    <>
      <div className='container-history' title='Cliquez pour voir plus'>
        {listHistory.map((article, index) => (
          <ul key={index} className='article-history' onClick={() => handleClickHistory(article)}>
            <div className='title-like-history'>
              <li>{article.title}</li>
              <li>
                <LikeButton />
              </li>
            </div>
            <li>{article.description}</li>
          </ul>
        ))}
      </div>

      {/* <Link to={`/historique-article/${historyId}`}>Lien d histo selected</Link> */}
      <Link to='/pas-d-historique'>Pas d historique</Link>
    </>
  );
}
