import { useContext } from 'react';

import { ChoicesContext } from '../contexts/choices-context';

export default function NextArticle() {
  const { listFavourite } = useContext(ChoicesContext);

  function handleNext() {}

  return (
    <>
      <div onClick={handleNext}>suivant</div>
    </>
  );
}
