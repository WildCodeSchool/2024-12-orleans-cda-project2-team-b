import { Link, Outlet } from 'react-router-dom';

import ButtonRandom from '../components/button-random';
import './search.scss';

const placeholderList = [
  { language: 'Français', placeholderTraduc: 'Ecrivez votre recherche en français' },
  { language: 'English', placeholderTraduc: 'Write your search in english' },
  { language: 'Deutsch', placeholderTraduc: 'Schreiben Sie Ihre Suche auf Deutsch' },
  { language: '中文', placeholderTraduc: '用中文写下您的搜索' },
  { language: 'Español', placeholderTraduc: 'Escriba su búsqueda en español' },
];

export default function Search() {
  return (
    <>
      {/*Plus tard afficher le place holder selon langue choisie */}
      <div className='search-container'>
        <div className='search-bar'>
          <img src='/icons/search.png' />
          <input type='search' placeholder='Ecrivez votre recherche en français '></input>
        </div>
        <ButtonRandom />
      </div>
      <Link to='resultats-de-recherche'>Résultats de recherche</Link>
      <Link to='oops'>Erreur de recherche</Link>
      <Link to='article-aleatoire'>Lien vers les articles Aléatoires</Link>
      <Outlet />
    </>
  );
}
