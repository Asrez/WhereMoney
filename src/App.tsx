import { Container } from '@mui/material';
import Transaction from './components/transaction/Transaction';
import Wallet from './components/wallet/Wallet';
import Navbar from './components/navbar/Navbar'
function App() {
  return (<>
    <Navbar />
    <Container style={{ paddingTop: '4rem' }} disableGutters >
      <Wallet />
      <Transaction />
    </Container>
  </>
  );
}

export default App;
