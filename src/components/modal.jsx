import ReactDOM from 'react-dom';

import './modal.scss';

export default function Modal({ isShowing, hide, children }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      hide();
    }
  };

  return isShowing
    ? ReactDOM.createPortal(
        <>
          <div className='modal-overlay' onClick={hide} onKeyDown={handleKeyDown} tabIndex={0} role='button' />
          <div className='modal'>
            <div className='modal-header'>
              <button
                type='button'
                onClick={hide}
                onKeyDown={(e) => e.key === 'Enter' && hide()}
                className='modal-close'
              >
                ×
              </button>
            </div>
            <div className='modal-content'>{children}</div>
          </div>
        </>,
        document.body,
      )
    : null;
}
