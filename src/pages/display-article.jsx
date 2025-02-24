import { useLocation } from 'react-router-dom';

import { ButtonNav } from '../components/button-nav-article';
import LikeButton from '../components/like-button';
import useDisplayArticle from '../hook/use-display-article';
import './display-article.scss';

export default function DisplayArticle() {
  const location = useLocation();
  const tableNav = location.state?.tableNav;
  const pathNav = location.state?.pathNav;

  const { article } = useDisplayArticle();

  return (
    <>
      <div className='container-display-article'>
        <div className='container-display-contents'>
          <h2>{article?.title || 'titre inconnu'}</h2>
          <h3>-{article?.source_id || 'source introuvable'}-</h3>
          <img src={article?.image_url || '/no-image.svg'} alt='image article' title='image article'></img>
          <p> {article?.description || "Nous n'avons pas de texte à vous proposer pour cet article..."}</p>
        </div>
        <div className='container-plus-like'>
          {article?.link ? (
            <a href={article?.link} target='_blank' rel='noreferrer'>
              Article complet
            </a>
          ) : (
            "Pas d'information"
          )}

          <LikeButton article={article} />
        </div>
      </div>
      <div className='nav-article'>
        <ButtonNav direction={-1} classIcon='icon-previous' texte='précédent' pathNav={pathNav} tableNav={tableNav} />
        <ButtonNav direction={1} classIcon='icon-next' texte='suivant' pathNav={pathNav} tableNav={tableNav} />
      </div>
    </>
  );
}
