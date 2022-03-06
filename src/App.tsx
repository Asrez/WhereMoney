import { useState, useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import NotFound from './pages/notfound/NotFound';
import axios from 'axios'
import { Sign, User } from './util/types';
import { useCookies } from 'react-cookie';
import ProtectedRoutes from './components/ProtectedRoutes';
import LoadingOverlay from 'react-loading-overlay';



function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState<User>({ username: '', token: '' })
  const [signinError, setSigninError] = useState(false);
  const [signupError, setSignupError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [cookies, setCookie, removeCookie] = useCookies(['username', 'password']);
  useEffect(() => {
    const login = async () => {
      axios({
        method: 'post',
        url: 'http://localhost:8090/auth/login',
        data: {
          username: cookies.username,
          password: cookies.password
        }
      })
        .then((user) => {
          setAuth(true)
          setLoading(false)
          setUser(user.data)
        })
    }
    if (cookies.username && cookies.password) {

      login()
    }
    else {
      setLoading(false)
    }
  }, [cookies.username, cookies.password])
  const navigate = useNavigate()

  const handleLogout = () => {
    removeCookie('username')
    removeCookie('password')
    setAuth(false)
    setUser({ username: '', token: '' })
    navigate('/')
  }

  const login = async (username: string, password: string, check: string) => {
    await axios({
      method: 'post',
      url: 'http://localhost:8090/auth/login',
      data: {
        username: username,
        password: password
      }
    })
      .then((user) => {
        setUser(user.data)
        setAuth(true)
        setLoading(false)
        if (check !== null) {
          setCookie('username', username)
          setCookie('password', password)
        }
        navigate('/')
      })
      .catch(() => { setSigninError(true) })

  }

  const signup = async ({ email, firstName, lastName, password, username }: Sign) => {
    await axios({
      method: 'post',
      url: 'http://localhost:8090/api/v1/user',
      data: {
        email,
        family_name: lastName,
        name: firstName,
        password,
        username,
      },
    }).then((user) => {
      setUser({ username: user.data.username as string, token: '' })
      setAuth(true)
      navigate('/')
    })
      .catch(() => {
        setSignupError(true)
      })
  }

  return <>

    {loading ?
      <LoadingOverlay
        active={loading}
        spinner
      >
        <div style={{ height: '100vh' }}>
        </div>
      </LoadingOverlay>
      : <>
        <Navbar username={user.username} handleLogout={handleLogout} />
        <Container style={{ paddingTop: '4rem' }}  >
          <Routes>
            <Route element={<ProtectedRoutes auth={auth} />}>
              <Route path='/' element={<Home token={user.token} />} />
            </Route>
            {!auth && <>
              <Route path='/signin' element={<Signin login={login} error={signinError} />} />
              <Route path='/signup' element={<Signup signup={signup} error={signupError} />} />
            </>
            }
            <Route path='/not-found' element={<NotFound />} />
            <Route path='*' element={<Navigate to={auth ? '/not-found' : '/signin'} />} />
          </Routes>
        </Container>
        <Footer />
      </>
    }

  </>

}

export default App;
