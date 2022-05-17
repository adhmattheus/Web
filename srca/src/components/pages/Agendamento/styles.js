import styled from 'styled-components';

export const Container = styled.main`
border: 1px solid black;
max-width: 1120px;
margin: 60px auto;
display: flex;
`;

export const Agenda = styled.div`
  flex:1;
  select:{
    width: '100%',
    max-width: 40px,
  } 
`;

export const Calendario = styled.div`
  width: 380px;
  background-color: red;
  width: 50%;
  height: 50;
`;

export const ContentBotao = styled.div`

border: 1px solid black;
max-width: 1120px;
margin: auto;
display: flex;
justify-content: center;
`;