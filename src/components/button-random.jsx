import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChoicesContext } from '../contexts/choices-context';
import { keyWordTechList } from '../data/keyword-list';
import './button-random.scss';

export default function ButtonRandom() {
  const { setSearchValue, setIsRandom } = useContext(ChoicesContext);
  const navigate = useNavigate();

  const handleClickRandom = () => {
    // const randomValue = keyWordTechList[Math.floor(Math.random() * keyWordTechList.length)];
    const randomValue = 'seclier';
    setIsRandom(true);
    setSearchValue(randomValue);
    navigate(`/recherche-resultats`);
  };

  return (
    <>
      <button className='random-button' onClick={handleClickRandom}>
        <span>Articles aléatoires</span>
      </button>
    </>
  );
}
