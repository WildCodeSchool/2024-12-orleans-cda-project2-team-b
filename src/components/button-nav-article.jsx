import useNavigationArticle from '../hook/use-navigation-article';
import './button-nav-article.scss';

export function ButtonNav({ direction, classIcon, texte, tablNav }) {
  const { handleDirection, isAvailable } = useNavigationArticle({ direction, tablNav });
  return (
    <>
      <div onClick={handleDirection} className={isAvailable ? 'button-nav' : 'button-nav-disable'}>
        {direction === 1 ? (
          <>
            {texte} <img className={classIcon} src='/icons/arrow-nav.svg' />
          </>
        ) : (
          <>
            <img className={classIcon} src='/icons/arrow-nav.svg' /> {texte}
          </>
        )}
      </div>
    </>
  );
}
