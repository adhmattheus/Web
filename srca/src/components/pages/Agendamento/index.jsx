import Select from 'react-select'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { Container, Agenda, Calendario, ContentBotao } from './styles'
import { useState } from 'react';

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
  { value: '10:00', label: '10:00' },
  { value: '10:30', label: '10:30' },
  { value: '18:00', label: '18:00' },
]

export function Agendamento() {

  const [agendamento, setAgendamento] = useState({
    atendimento : '',
    setor : '',
    campus : ''
  });

  const onChangeAgendamento = e => 
    setAgendamento({...agendamento,[e.target.agendamento.atendimento] : e.target.value });
  

  const Submit = (e) => {
    e.preventDefault();
    console.log({ agendamento });
  }

  // const data = {
  //     atendimento:
  //     setor:
  //     campus: 
  //     horario:
  //     dia:
  // }


  return (
    <>
      <Container>

        <Agenda>
          <h1>Faça seu agendamento</h1>

          <form onSubmit={Submit}>
            <label>
              Atendimento
              <select value={agendamento.atendimento} onChange={onChangeAgendamento}>

                <option value="Matrícula">Matrícula</option>
                <option value="Entrega de diploma">Entrega de diploma</option>

              </select>
            </label>

            <label>
              Setor
              <select value={agendamento.setor} onChange={onChangeAgendamento}>

                <option value="Proae">Proae</option>
                <option value="SRCA">SRCA</option>

              </select>
            </label>

            <label>
              Campus
              <select value={agendamento.campus} onChange={onChangeAgendamento}>

                <option value="Petrolina">Petrolina</option>
                <option value="Juazeiro">Juazeiro</option>
                <option value="Paulo Afonso">Paulo Afonso</option>

              </select>
            </label>


          </form>
        </Agenda>

        <Calendario>
          <DayPicker />
        </Calendario>

      </Container>

      <ContentBotao>

        <button type="submit" onClick={(Submit)}>Agendar</button>

        <button type="submit">Cancelar</button>

      </ContentBotao>




    </>







  )
}