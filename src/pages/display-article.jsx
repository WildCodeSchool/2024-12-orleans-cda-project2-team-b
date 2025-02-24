import { useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { ButtonNav } from '../components/button-nav-article';
import LikeButton from '../components/like-button';
import { ChoicesContext } from '../contexts/choices-context';
import './display-article.scss';

const API_KEY = import.meta.env.VITE_API_KEY;
export default function DisplayArticle() {
  const { articleChosen, setArticleChosen } = useContext(ChoicesContext);
  const location = useLocation();
  const tableNav = location.state?.tableNav;
  const pathNav = location.state?.pathNav;
  const { article_id } = useParams();

  //----------------------------------
  useEffect(() => {
    if (article_id) {
      fetch(`https://newsdata.io/api/1/latest?apikey=${API_KEY}&id=${article_id}`)
        .then((response) => response.json())
        .then((data) => {
          const article = data.results;
          setArticleChosen(article);
        });
    }
  }, [setArticleChosen, article_id]);
  // ---------------------------------------------------------------
  console.log(articleChosen);

  return (
    <>
      <div className='container-display-article'>
        <div className='container-display-contents'>
          <h2>{articleChosen.title || 'titre inconnu'}</h2>
          <h3>-{articleChosen.source_id || 'source introuvable'}-</h3>
          <img src={articleChosen.image_url || '/no-image.svg'} alt='image article' title='image article'></img>
          <p> {articleChosen.description || "Nous n'avons pas de texte à vous proposer pour cet article..."}</p>
        </div>
        <div className='container-plus-like'>
          {articleChosen.link ? (
            <a href={articleChosen.link} target='_blank' rel='noreferrer'>
              Article complet
            </a>
          ) : (
            "Pas d'information"
          )}

          <LikeButton article={articleChosen} />
        </div>
      </div>
      <div className='nav-article'>
        <ButtonNav direction={-1} classIcon='icon-previous' texte='précédent' pathNav={pathNav} tableNav={tableNav} />
        <ButtonNav direction={1} classIcon='icon-next' texte='suivant' pathNav={pathNav} tableNav={tableNav} />
      </div>
    </>
  );
}
