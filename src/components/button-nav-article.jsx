import { useDarkTheme } from '../contexts/dark-theme-context';
import useNavigationArticle from '../hook/use-navigation-article';
import './button-nav-article.scss';

export function ButtonNavArticle({ direction, classIcon, texte, tableNav, pathNav }) {
  //use the hook use-navigation-article
  const navigation = useNavigationArticle({ direction, tableNav, pathNav });
  const { darkTheme } = useDarkTheme();
  // check if navigation is null
  if (!navigation) {
    return null;
  }

  //destructuration for security
  const { handleDirection, isAvailable } = navigation;

  return (
    <>
      {/* display button nav only if is not the first or last article*/}
      <div onClick={handleDirection} className={isAvailable ? 'button-nav' : 'button-nav-disable'}>
        {/* display left or right button depends the direction asked */}
        {direction === 1 ? (
          <>
            {texte}
            <img className={classIcon} src={darkTheme ? '/icons/arrow-black-nav.svg' : '/icons/arrow-nav.svg'} />
          </>
        ) : (
          <>
            <img className={classIcon} src={darkTheme ? '/icons/arrow-black-nav.svg' : '/icons/arrow-nav.svg'} />
            {texte}
          </>
        )}
      </div>
    </>
  );
}
