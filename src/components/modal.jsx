import { createPortal } from 'react-dom';

import { useDarkTheme } from '../contexts/dark-theme-context';
import './modal.scss';

export default function Modal({ isShowing, hide, children }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      hide();
    }
  };

  const { darkTheme } = useDarkTheme();

  return isShowing
    ? createPortal(
        <>
          <div className={`modal-container ${darkTheme ? 'dark-mode' : ''}`}>
            <div className='modal-overlay' onClick={hide} onKeyDown={handleKeyDown} tabIndex={0} role='button' />
            <div className='modal'>
              <div className='modal-header'>
                <button type='button' onClick={hide} onKeyDown={handleKeyDown} className='modal-close'></button>
              </div>
              <div className='modal-content'>{children}</div>
            </div>
          </div>
        </>,
        document.body,
      )
    : null;
}
