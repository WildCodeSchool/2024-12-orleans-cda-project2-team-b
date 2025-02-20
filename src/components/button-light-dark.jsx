import { useDarkTheme } from '../contexts/dark-theme-context.jsx';
import './button-light-dark.scss';

export default function ButtonLightDark() {
  const { darkTheme, setDarkTheme } = useDarkTheme();

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <label className='switch'>
      <input id='input' type='checkbox' checked={darkTheme} onChange={toggleTheme} />
      <div className='slider round'>
        <div className='sun-moon'>
          <svg id='moon-dot-1' className='moon-dot' viewBox='0 0 100 100'>
            <circle cx='50' cy='50' r='50'></circle>
          </svg>
          <svg id='moon-dot-2' className='moon-dot' viewBox='0 0 100 100'>
            <circle cx='50' cy='50' r='50'></circle>
          </svg>
          <svg id='moon-dot-3' className='moon-dot' viewBox='0 0 100 100'>
            <circle cx='50' cy='50' r='50'></circle>
          </svg>
        </div>
        <div className='stars'>
          <svg id='star-1' className='star' viewBox='0 0 20 20'>
            <path d='M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z'></path>
          </svg>
        </div>
      </div>
    </label>
  );
}
