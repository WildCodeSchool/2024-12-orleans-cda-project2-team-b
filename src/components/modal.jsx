import ReactDOM from 'react-dom';

import './modal.scss';

export default function Modal({ isShowing, hide, children }) {
  return isShowing
    ? ReactDOM.createPortal(
        <>
          <div className='modal-overlay' onClick={hide}></div>
          <div className='modal'>
            <div className='modal-header'>
              <button type='button' onClick={hide} className='modal-close'>
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
