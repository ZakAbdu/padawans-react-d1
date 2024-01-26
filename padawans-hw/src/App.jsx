import Container from 'react-bootstrap/Container'
import Header from './components/header'
import Body from './components/Body'
import Register from './components/forms/register'
import Users from './components/Users'
import SocialPage from './pages/SocialPage'
import Whiteboard from './components/Whiteboard'
import FormPage from './pages/FormPage'
import LandingPage from './pages/LandingPage'
import Login from './components/forms/Login'

import { Route, Routes } from 'react-router-dom'
import { Movies } from './components/movies'


export default function App() {

  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<FormPage> <Login /> </FormPage>} />
        <Route path='/register' element={<FormPage> <Register /> </FormPage>} />
        <Route path='/users' element={<SocialPage> <Users /> </SocialPage>} />
        <Route path='/movies' element={<SocialPage> <Movies /> </SocialPage>} />
      </Routes>

    </Container>
  )
}
