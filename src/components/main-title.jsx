import { useNavigate } from 'react-router-dom';

import './main-title.scss';

export default function MainTitle() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className='main-title-position' onClick={handleClick}>
        <h1 className='main-title-h1'>{"Wild's News"}</h1>
        <h2 className='main-title-h2'>{"L'actu tech"}</h2>
      </div>
    </>
  );
}
