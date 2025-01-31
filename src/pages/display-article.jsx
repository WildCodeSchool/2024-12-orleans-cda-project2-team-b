// import { useParams } from 'react-router-dom';
import chien from '../assets/chien-robot.png';
import './display-article.scss';

export default function DisplayArticle() {
  // const { id } = useParams();
  return (
    <>
      <div className='article-container'>
        <img className='background-article' src={chien} />
        <div className='article-box'>
          <h2>{"Les chiens robots, de nouveaux animaux de compagnies à offrir sans crainte d'abandon"}</h2>
          <img src={chien} alt='image article' />
          <p className='text-article'>
            {
              "Alice, passionnée par les animaux, hésite à adopter un nouveau compagnon après la perte de son chien bien-aimé. Pour des personnes comme elle, les chiens robots offrent une alternative fascinante, sans les contraintes émotionnelles liées à la mort d'un animal vivant. Ces compagnons numériques, mêlant technologie et affection, redéfinissent le concept d'animal de compagnie. Les chiens robots, comme l'Aibo de Sony ou le Go2 d'Unitree Robotics, sont bien plus que de simples gadgets. Dotés d'intelligence artificielle, de reconnaissance vocale et faciale, ainsi que de capteurs sophistiqués, ils interagissent avec leur environnement et leurs propriétaires. Conçus pour imiter le comportement d'un chien réel, ils peuvent marcher, aboyer, remuer la queue et même simuler des émotions."
            }
          </p>

          <div className='under-text-article'>
            <a className='complete-article' href='#'>
              Article complet
            </a>
            <div className='like-button'>
              <button>likebuttontest</button>
              {/* <LikeButton /> */}
            </div>
          </div>
        </div>

        <div className='under-article'>
          <div className='previous-article'>
            <button>articleprecedenttest</button>
            {/* <ArticleNavComponent title='Article précédent' /> */}
          </div>
          <div className='next-article'>
            <button>articlesuivanttest</button>
            {/* <ArticleNavComponent title='Article suivant' /> */}
          </div>
        </div>
      </div>
    </>
  );
}
