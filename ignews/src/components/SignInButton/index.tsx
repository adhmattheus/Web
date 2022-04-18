import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import {FiX} from 'react-icons/fi'

export function SignInButton() {
  const isUserLoggedIn = false;

  return isUserLoggedIn ? (
    <button
      type="button"
      className={styles.signInButton}>
      <FaGithub color="#04d361" />

      Mattheus Adhonnay
      <FiX color="#737080" className={styles.closeIcon}/>

    </button>

  ) : (
    <button
      type="button"
      className={styles.signInButton}>
      <FaGithub color="#eba417" />
      sign in with Github
    </button>
  );
}