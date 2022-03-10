import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashbord() {
  return (
    <Container>
      <Summary />
      <TransactionTable/>
    </Container>
  );
}