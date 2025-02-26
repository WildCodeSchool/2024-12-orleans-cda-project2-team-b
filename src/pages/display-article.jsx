import { useLocation } from 'react-router-dom';

import { ButtonNavArticle } from '../components/button-nav-article';
import LikeButton from '../components/like-button';
import useDisplayArticle from '../hook/use-display-article';
import './display-article.scss';

export default function DisplayArticle() {
  const location = useLocation();
  const tableNav = location.state?.tableNav;
  const pathNav = location.state?.pathNav;
  const isFav = location.state?.isFav;

  const { articleChosen, isTooManyRequest } = useDisplayArticle();

  return (
    <>
      {isTooManyRequest ? (
        <p className='texte-results'>Désolé, trop de requêtes ont été demandées, ré-essayez dans 15 minutes.</p>
      ) : (
        <>
          <div className='article-container'>
            {isFav && <img className='background-article' src={articleChosen?.image_url} />}

            <div className='container-display-article'>
              <div className='container-display-contents'>
                <h2>{articleChosen?.title || 'titre inconnu'}</h2>
                <h3>-{articleChosen?.source_id || 'source introuvable'}-</h3>
                <img src={articleChosen?.image_url || '/no-image.svg'} alt='image article' title='image article'></img>
                <p> {articleChosen?.description || "Nous n'avons pas de texte à vous proposer pour cet article..."}</p>
              </div>
              <div className='container-plus-like'>
                {articleChosen?.link ? (
                  <a href={articleChosen?.link} target='_blank' rel='noreferrer'>
                    Article complet
                  </a>
                ) : (
                  "Pas d'information"
                )}

                <LikeButton articleChosen={articleChosen} />
              </div>
            </div>
            <div className='nav-article'>
              <ButtonNavArticle
                direction={-1}
                classIcon='icon-previous'
                texte='précédent'
                pathNav={pathNav}
                tableNav={tableNav}
              />
              <ButtonNavArticle
                direction={1}
                classIcon='icon-next'
                texte='suivant'
                pathNav={pathNav}
                tableNav={tableNav}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
