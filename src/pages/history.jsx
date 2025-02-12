import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import ArticleHistory from '../components/article-history';
import LikeButton from '../components/like-button';
import { ChoicesContext } from '../contexts/choices-context';
import './history.scss';
import NoHistory from './no-history';

export default function History() {
  const { listHistory, setArticleChosen, choiceLocalStorage, setListHistory, setHourHistory } =
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
        <NoHistory />
      )}
    </>
  );
}
