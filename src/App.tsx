import { Container } from '@mui/material';
import Transaction from './components/transaction/Transaction';
import Wallet from './components/wallet/Wallet';

function App() {
  return (
    <Container>
      <Wallet />
      <Transaction />
    </Container>
  );
}

export default App;
