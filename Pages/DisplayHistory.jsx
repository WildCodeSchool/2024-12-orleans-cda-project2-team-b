import { useParams } from 'react-router-dom';

import './DisplayHistory.css';

export default function DisplayHistory() {
  const { id } = useParams();
  return (
    <>
      <p>Je suis la page de display de l historique</p>
      <p>ID de l article de l historique : {id}</p>
    </>
  );
}
