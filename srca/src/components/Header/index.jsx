import { Container, HeaderPrincipal, HeaderContent, Profile,ContentProfile } from './styles'
import logoImg from '../../assets/imgs/logo.png';
import { FiPower } from 'react-icons/fi';

export function Header() {
  return (
    <Container>
      <HeaderPrincipal>
        
        <HeaderContent>
          <img src={logoImg} alt="srca" />

          <ContentProfile>
          <Profile>
            <img src="https://avatars.githubusercontent.com/u/30497608?v=4"
              alt="Mattheus"
            />
            <div>
              <span>Bem-vindo</span>
              <strong>Mattheus Adhonnay</strong>
            </div>
          </Profile>
          <button type="button">
            <FiPower />
          </button>
          </ContentProfile>

        </HeaderContent>
      </HeaderPrincipal>
    </Container>
  );
}
