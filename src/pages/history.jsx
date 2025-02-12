import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import LikeButton from '../components/like-button';
import { ChoicesContext } from '../contexts/choices-context';
import './history.scss';
import NoHistory from './no-history';

export default function History() {
  const { listHistory, setArticleChosen, choiceLocalStorage, setListHistory } = useContext(ChoicesContext);
  const navigate = useNavigate();

  function handleClickHistory(article) {
    setArticleChosen(article);

    // If user say yes to save his data, we keep in memory consulted articles for the history
    if (choiceLocalStorage === 'yes') {
      const hour = new Date().getTime();

      //Add or modify the hourConsulted to allow the sort of listHistory
      setListHistory((prev) => {
        let updatedHistory;
        //check if article is already in history
        const articleExistingIndex = prev.findIndex((a) => a.title === article.title);

        if (articleExistingIndex !== -1) {
          //if already existing we update the hourConsulted
          updatedHistory = [...prev];
          updatedHistory[articleExistingIndex] = { ...updatedHistory[articleExistingIndex], hourConsulted: hour };
        } else {
          //if not we add the hourConsulted
          updatedHistory = [...prev, { ...article, hourConsulted: hour }];
        }

        //we keep only the 10 last article consulted + sort to see the last article consulted in first
        return updatedHistory.slice(-10).sort((a, b) => (b.hourConsulted || 0) - (a.hourConsulted || 0));
      });
    }

    //display the component DisplayArticle
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
