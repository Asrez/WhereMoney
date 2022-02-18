import { Container } from '@mui/material';
import Transaction from './components/transaction/Transaction';
import Wallet from './components/wallet/Wallet';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
function App() {
  return (<>
    <Navbar />
    <Container style={{ paddingTop: '4rem' }}  >
      <Wallet />
      <Transaction />
    </Container>
    <Footer  />
  </>
  );
}

export default App;
