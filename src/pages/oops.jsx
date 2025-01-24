import './oops.scss';

export default function Oops() {
  return (
    <>
    <div className="nosearchcontainer">
      <p>Oops... 🫢<br />
      Nous n’avons pas de résultat pour votre demande</p>
      <a href="recherche"><img src="/icons/search-inactive-black.png" alt="loupe lien vers recherche" /></a>
      </div>
    </>
  );
}
