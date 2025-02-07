import { useContext } from 'react';

import { ChoicesContext } from '../contexts/choices-context';
import './results.scss';

export default function Results() {
  const { searchValue } = useContext(ChoicesContext);

  return <p>Recherche souhaitée : {searchValue}</p>;
}
