import { useLocation } from 'react-router-dom';

import { ButtonNav } from '../components/button-nav-article';
import LikeButton from '../components/like-button';
import useDisplayArticle from '../hook/use-display-article';
import './display-article.scss';

export default function DisplayArticle() {
  const location = useLocation();
  const tableNav = location.state?.tableNav;
  const pathNav = location.state?.pathNav;

  const { articleChosen } = useDisplayArticle();

  return (
    <>
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
        <ButtonNav direction={-1} classIcon='icon-previous' texte='précédent' pathNav={pathNav} tableNav={tableNav} />
        <ButtonNav direction={1} classIcon='icon-next' texte='suivant' pathNav={pathNav} tableNav={tableNav} />
      </div>
    </>
  );
}
