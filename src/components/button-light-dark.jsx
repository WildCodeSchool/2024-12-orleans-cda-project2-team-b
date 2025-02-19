import { useEffect, useState } from 'react';

import '../components/main-title.scss';
import '../pages/history.scss';
import './button-light-dark.scss';
import './modal.scss';
import './results-list.scss';

export default function ButtonLightDark({ setDarkTheme }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('dark-mode') === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);

    const elements = [
      '.modal',
      '.modal-close',
      '.container-history',
      '.container-display-contents',
      '.main-title-h1',
      '.main-title-h2',
      '.results-container',
      '.icon-github',
      '.icon-linked',
    ];

    elements.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => element.classList.toggle('dark-mode', darkMode));
    });
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem('dark-mode', newTheme);
      document.body.classList.toggle('dark-mode', newTheme);
      if (typeof setDarkTheme === 'function') {
        setDarkTheme(newTheme);
      }
      return newTheme;
    });
  };

  return (
    <label className='switch'>
      <input id='input' type='checkbox' checked={darkMode} onChange={toggleTheme} />
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
          <svg id='light-ray-1' className='light-ray' viewBox='0 0 100 100'>
            <circle cx='50' cy='50' r='50'></circle>
          </svg>
          <svg id='light-ray-2' className='light-ray' viewBox='0 0 100 100'>
            <circle cx='50' cy='50' r='50'></circle>
          </svg>
          <svg id='light-ray-3' className='light-ray' viewBox='0 0 100 100'>
            <circle cx='50' cy='50' r='50'></circle>
          </svg>

          <svg id='cloud-1' className='cloud-dark' viewBox='0 0 100 100'>
            <circle cx='50' cy='50' r='50'></circle>
          </svg>
          <svg id='cloud-2' className='cloud-dark' viewBox='0 0 100 100'>
            <circle cx='50' cy='50' r='50'></circle>
          </svg>
          <svg id='cloud-3' className='cloud-dark' viewBox='0 0 100 100'>
            <circle cx='50' cy='50' r='50'></circle>
          </svg>
          <svg id='cloud-4' className='cloud-light' viewBox='0 0 100 100'>
            <circle cx='50' cy='50' r='50'></circle>
          </svg>
          <svg id='cloud-5' className='cloud-light' viewBox='0 0 100 100'>
            <circle cx='50' cy='50' r='50'></circle>
          </svg>
          <svg id='cloud-6' className='cloud-light' viewBox='0 0 100 100'>
            <circle cx='50' cy='50' r='50'></circle>
          </svg>
        </div>
        <div className='stars'>
          <svg id='star-1' className='star' viewBox='0 0 20 20'>
            <path d='M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z'></path>
          </svg>
          <svg id='star-2' className='star' viewBox='0 0 20 20'>
            <path d='M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z'></path>
          </svg>
          <svg id='star-3' className='star' viewBox='0 0 20 20'>
            <path d='M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z'></path>
          </svg>
          <svg id='star-4' className='star' viewBox='0 0 20 20'>
            <path d='M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z'></path>
          </svg>
        </div>
      </div>
    </label>
  );
}
