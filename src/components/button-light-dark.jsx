import { useEffect, useState } from 'react';

import '../components/main-title.scss';
import './button-light-dark.scss';
import './modal.scss';

export default function ButtonLightDark() {
  const [darkTheme, setDarkTheme] = useState(() => {
    return localStorage.getItem('dark-mode') === 'true';
  });

  useEffect(() => {
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close');
    const mainTitleH1 = document.querySelector('.main-title-h1');
    const mainTitleH2 = document.querySelector('.main-title-h2');
    const iconGithub = document.querySelectorAll('.icon-github');
    const iconLinked = document.querySelectorAll('.icon-linked');

    if (darkTheme) {
      document.body.classList.add('dark-mode');
      if (modal) modal.classList.add('dark-mode');
      if (modalClose) modalClose.classList.add('dark-mode');
      if (mainTitleH1) mainTitleH1.classList.add('dark-mode');
      if (mainTitleH2) mainTitleH2.classList.add('dark-mode');

      iconGithub.forEach((icon) => icon.classList.add('dark-mode'));
      iconLinked.forEach((icon) => icon.classList.add('dark-mode'));
    } else {
      document.body.classList.remove('dark-mode');
      if (modal) modal.classList.remove('dark-mode');
      if (modalClose) modalClose.classList.remove('dark-mode');
      if (mainTitleH1) mainTitleH1.classList.remove('dark-mode');
      if (mainTitleH2) mainTitleH2.classList.remove('dark-mode');

      iconGithub.forEach((icon) => icon.classList.remove('dark-mode'));
      iconLinked.forEach((icon) => icon.classList.remove('dark-mode'));
    }
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem('dark-mode', newTheme);
      return newTheme;
    });
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
