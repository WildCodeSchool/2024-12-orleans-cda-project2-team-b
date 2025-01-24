import { Link } from 'react-router-dom';

import './search.scss';

const placeHolderList = [
  { language: 'Français', placeHolderTraduc: 'Ecrivez votre recherche en français' },
  { language: 'English', placeHolderTraduc: 'Write your search in english' },
  { language: 'Deutsch', placeHolderTraduc: 'Schreiben Sie Ihre Suche auf Deutsch' },
  { language: '中文', placeHolderTraduc: '用中文写下您的搜索' },
  { language: 'Español', placeHolderTraduc: 'Escriba su búsqueda en español' },
];

export default function Search() {
  return (
    <>
      <p>Je suis la page de recherche</p>
      <p>barre de recherche ici</p>
      <br></br>

      {/*Plus tard afficher le place holder selon langue choisie */}
      <div className='searchBar'>
        <img src='/icons/search.png' />
        <input type='search' placeholder='Ecrivez votre recherche en français '></input>
      </div>
      <br></br>
      <br></br>
      <Link to='/resultats-de-recherche'>Résultats de recherche</Link>
      <Link to='/oops'>Erreur de recherche</Link>
      <Link to='/article-aleatoire'>Lien vers les articles Aléatoires</Link>
    </>
  );
}
