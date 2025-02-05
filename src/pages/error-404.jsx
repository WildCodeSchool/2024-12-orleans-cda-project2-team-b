import './error-404.scss';

export default function Error404() {
  return (
    <div className='page404'>
      <div className='contentOf404'>
        <img src='/images/404_Not_Found.svg' alt='Erreur 404' className='picture404' />
        <img src='/icons/search.svg' alt='recherche' className='searchIconButton' />
      </div>
    </div>
  );
}
