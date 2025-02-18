import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';
import { keyWordTechList } from '../data/keyword-list';
import './button-random.scss';

export default function ButtonRandom() {
  const { setSearchValue, setIsRandom } = useContext(ChoicesContext);
  const navigate = useNavigate();
  const [goSearch, setGoSearch] = useState(0);

  const handleClickRandom = () => {
    const randomValue = keyWordTechList[Math.floor(Math.random() * keyWordTechList.length)];
    setIsRandom(true);
    setSearchValue(randomValue);
    setGoSearch(1);
  };

  useEffect(() => {
    if (goSearch) {
      setGoSearch(0);
      // searchValue composant results
      navigate(`/recherche-resultats`);
    }
  }, [goSearch, navigate]);

  return (
    <>
      <button className='random-button' onClick={handleClickRandom}>
        <span>Articles aléatoires</span>
      </button>
    </>
  );
}
