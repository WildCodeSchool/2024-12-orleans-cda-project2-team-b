import { useContext, useEffect } from 'react';
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
      const hour = new Date().getTime();
      setHourHistory(hour);

      setListHistory((prev) => {
        const updatedHistory = [...prev, { ...article, hourConsulted: hour }];
        return updatedHistory.slice(-10).sort((a, b) => (b.hourConsulted || 0) - (a.hourConsulted || 0));
      });
    }
    navigate(`/historique-choisi`);
  }
  useEffect(() => {
    console.log('listHistory mis à jour :', listHistory);
  }, [listHistory]); // Exécute ce log chaque fois que listHistory change
  {
    console.log('Rendering listHistory:', listHistory);
  }

  return (
    <>
      {listHistory.length > 0 ? (
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
      ) : (
        <p>no article</p>
      )}

      {/* <Link to={`/historique-article/${historyId}`}>Lien d histo selected</Link> */}
      <Link to='/pas-d-historique'>Pas d historique</Link>
    </>
  );
}
