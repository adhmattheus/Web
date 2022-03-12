import { Container, Content } from './styles'
import logoImg from '../../assets/logo.svg'

interface HeaderProps {
  onOpenNewTransitionModal: () => void;
}

export function Header({ onOpenNewTransitionModal }: HeaderProps) {
  return (
    <Container>
      <Content>

        <img src={logoImg} alt="dt money" />

        <button type="button" onClick={onOpenNewTransitionModal}>
          Nova transação
        </button>

      </Content>
    </Container>
  )
}