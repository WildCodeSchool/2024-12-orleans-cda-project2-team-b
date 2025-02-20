import { useNavigate } from 'react-router-dom';

import './main-title.scss';

export default function MainTitle() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate('/');
    }
  };

  return (
    <>
      <div className='main-title-position'>
        <h1 className='main-title-h1' onClick={handleClick} onKeyDown={handleKeyDown}>
          {"Wild's News"}
        </h1>
        <h2 className='main-title-h2' onClick={handleClick} onKeyDown={handleKeyDown}>
          {"L'actu tech"}
        </h2>
      </div>
    </>
  );
}
