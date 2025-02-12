// import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';
import LikeButton from './like-button';
import './results-list.scss';

export default function ResultsList({ article }) {
  const navigate = useNavigate();

  const { setArticleChosen, choiceLocalStorage, setListHistory } = useContext(ChoicesContext);

  function handleClickArticle() {
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
    navigate(`/recherche-article-choisi`);
  }

  if (!article) return null;

  return (
    <button className='article-button' title='Appuyer pour voir plus' onClick={handleClickArticle}>
      <div className='results-container'>
        <p className='article-title'>{article.title}</p>

        {article.image_url ? (
          article.image_url && <img src={article.image_url} alt="photo de l'article" />
        ) : (
          <img src='/no-image.svg' alt='photo logo' />
        )}

        <div className='under-image-results'>
          <div className='source'>{article.source_id}</div>
          <LikeButton />
        </div>
      </div>
    </button>
  );
}
