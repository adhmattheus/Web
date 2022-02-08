import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../imgs/costs_logo.png'

function Navbar() {
  return (
    <nav class={styles.navbar}>

      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul class={styles.list}>
          <li class={styles.item} >
            <Link to='/'>Home</Link>
          </li>
          <li class={styles.item} >
            <Link to='/'>Projetos</Link>
          </li>
          <li class={styles.item}>
            <Link to='/contact'>Contato</Link>
          </li>
          <li class={styles.item}>
            <Link to='/company'>Empresa</Link>
          </li>

        </ul>
      </Container>
    </nav>
  )
}
export default Navbar;