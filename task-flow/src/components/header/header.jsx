// Ce composant est utilisé pour afficher l'en-tête de l'application.
import styles from './header.module.css';
import reactLogo from '../../assets/react.svg';
export const Header = () => {
  return <div className={styles.container}>
            <div className={styles.titleContainer}> 
              <img src={reactLogo} alt="logo" width={50} height={50} />
              <div>
                <h1>ReacTasks</h1>
                <div className='color-gray'>
                  <code>Simplifie tes tâches, Optimise ton flow.</code>
                </div>
              </div>
            </div>
              <code className= "color-primary">v.1.0</code>
          </div>;
};
