import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";



export function TransactionTable() {
  useEffect(() => {
    api.get('/transactions')
      .then(response => console.log(response.data))
  }, []);


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>

          <tr >
            <td>Investimentos</td>
            <td className="deposit">R$500,000</td>
            <td>Financeiro</td>
            <td>1/03/2022</td>
          </tr>

          <tr >
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$10.120,000</td>
            <td>Desenvolvimento</td>
            <td>10/03/2022</td>
          </tr>

          <tr >
            <td>Compras</td>
            <td className="withdraw">-R$687,23</td>
            <td>Pessoal</td>
            <td>05/03/2022</td>
          </tr>


        </tbody>

      </table>
    </Container>
  );
};
