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
import { Movies } from './components/movies'
import MoviePost from './components/forms/MoviePost'

import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import UserPage from './pages/UserPage'


export default function App() {

  const [user, setUser] = useState({username: '', password: '', token: ''})
  console.log(user)

  function updateUser({ username, password, token }){
    setUser({ username, password, token })
  }

  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      <MoviePost user={user} />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<FormPage> <Login user={user} updateUser={updateUser} /> </FormPage>} />
        <Route path='/register' element={<FormPage> <Register /> </FormPage>} />
        <Route path='/users' element={<SocialPage> <Users /> </SocialPage>} />
        <Route path='/movies' element={<SocialPage> <Movies /> </SocialPage>} />
        <Route path='/movie/:username' element={<UserPage />} />
      </Routes>

    </Container>
  )
}
