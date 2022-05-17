import Select from 'react-select'
import { Container, Agenda, Calendario, ContentBotao } from './styles'

const atendimento = [
  { value: 'entrega de diploma', label: 'entrega de diploma' },
  { value: 'matrícula', label: 'matrícula' },
  { value: 'informações', label: 'informações' },
]
const setor = [
  { value: 'SRCA', label: 'SRCA' },
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
    <>
      <Container>

        <Agenda>
          <h1>Faça seu agendamento</h1>

          <label>Atendimento</label>
          <Select options={atendimento} />

          <label>Setor</label>
          <Select options={setor} />

          <label>Campus</label>
          <Select options={campus} />

          <label>Horários</label>
          <Select options={horarios} />
        </Agenda>

        <Calendario>

        </Calendario>

      </Container>

      <ContentBotao>

        <button type="submit">Agendar</button>
        <button type="submit">Cancelar</button>

      </ContentBotao>




    </>







  )
}