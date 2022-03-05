import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Signup from './pages/Signup'

function App() {
  return (<>
    <Navbar />
    <Container style={{ paddingTop: '4rem' }}  >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Container>
    <Footer />
  </>
  );
}

export default App;
