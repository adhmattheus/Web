import Select from 'react-select'
import { Container, Agenda, Calendario } from './styles'

const atendimento = [
  { value: 'entrega de diploma', label: 'entrega de diploma' },
  { value: 'matrícula', label: 'matrícula' },
  { value: 'informações', label: 'informações' },
]
const setor = [
  { value: 'SRCA', label: 'SRA' },
  { value: 'PROEN', label: 'PROEN' },
  { value: 'PROAE', label: 'PROAE' },
]
const campus = [
  { value: 'Petrolina', label: 'Petrolina' },
  { value: 'Juazeiro', label: 'Juazeiro' },
  { value: 'Paulo Afonso', label: 'Paulo Afonso' },
]
const horarios = [
  { value: '18:00', label: 'entrega de diploma' },
  { value: 'matrícula', label: 'matrícula' },
  { value: 'informações', label: 'informações' },
]
export function Agendamento() {
  return (
    <Container>



      <Agenda>
        <h1>Faça seu agendamento.</h1>
        <Select options={atendimento} />
        <Select options={setor} />
        <Select options={campus} />
        <Select options={horarios} />
      </Agenda>

      <Calendario>

      </Calendario>
    </Container>
  )
}