import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import './search.scss';

const placeholderList = [
  { language: 'Français', placeholderTraduc: 'Ecrivez votre recherche en français' },
  { language: 'English', placeholderTraduc: 'Write your search in english' },
  { language: 'Deutsch', placeholderTraduc: 'Schreiben Sie Ihre Suche auf Deutsch' },
  { language: '中文', placeholderTraduc: '用中文写下您的搜索' },
  { language: 'Español', placeholderTraduc: 'Escriba su búsqueda en español' },
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      navigate(`/resultats-de-recherche?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <div className='search-bar'>
        <button
          onClick={handleSearch}
          style={{
            backgroundImage: "url('/icons/search.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '60px',
            height: '60px',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
          }}
        ></button>
        <input
          type='search'
          placeholder='Ecrivez votre recherche en français'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Link to='oops'>Erreur de recherche</Link>
      <Link to='article-aleatoire'>Lien vers les articles Aléatoires</Link>
      <Outlet />
    </>
  );
}
