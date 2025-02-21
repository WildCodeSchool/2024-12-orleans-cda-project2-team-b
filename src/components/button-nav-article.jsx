import useNavigationArticle from '../hook/use-navigation-article';
import './button-nav-article.scss';

export function ButtonNav({ direction, classIcon, texte, tableNav, pathNav }) {
  //use the hook use-navigation-article
  const { handleDirection, isAvailable } = useNavigationArticle({ direction, tableNav, pathNav });

  return (
    <>
      {/* display button nav only if is not the first or last article*/}
      <div onClick={handleDirection} className={isAvailable ? 'button-nav' : 'button-nav-disable'}>
        {/* display left or right button depends the direction asked */}
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
