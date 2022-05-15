import logoImg from '../../assets/imgs/logo.png';
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt="logo" />
    </Container>
  );
}
