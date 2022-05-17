import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const HeaderPrincipal = styled.header`
  padding: 15px 0;
  background: lightblue;
`;
export const HeaderContent = styled.div`
  max-width: 1120;
  margin: 0 auto;
  display: flex;
  align-items: left;

  > img{
  width: 20%;
  padding-left: 10px;

  }
    button{
      margin-left: auto;
      background: transparent;
      border: 0;

      svg{
        color: #999591;
        width: 20px;
        height: 20px;
      }
    }
  `;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;
  
  img{
    width:56px;
    height:56px;
    border-radius: 50%
  }

  div{
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
  }
`;