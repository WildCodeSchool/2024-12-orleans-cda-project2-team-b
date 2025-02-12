import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import ArticleHistory from '../components/article-history';
import LikeButton from '../components/like-button';
import { ChoicesContext } from '../contexts/choices-context';
import './history.scss';

export default function History({ article }) {
  const { listHistory, setArticleChosen, choiceLocalStorage, setListHistory } = useContext(ChoicesContext);
  const navigate = useNavigate();

  function handleClickHistory() {
    setArticleChosen(article);

    // If user say yes to save his data, we keep in memory consulted articles for the history
    if (choiceLocalStorage === 'yes') {
      if (listHistory.length >= 10) {
        setListHistory(listHistory.slice(-9));
      }
      setListHistory((prev) => [...prev, article]);
    }
    navigate(`/historique-article`);
  }

  return (
    <>
      <div className='container-history' title='Cliquez pour voir plus' onClick={handleClickHistory}>
        {listHistory.map((article, index) => (
          <ul key={index} className='article-history'>
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
