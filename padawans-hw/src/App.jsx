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
import { ToastContainer } from 'react-toastify'

import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import UserPage from './pages/UserPage'
import Logout from './components/logout'


export default function App() {

  
  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      <MoviePost />
      <Routes>
        <Route path='/' element={<LandingPage> <Whiteboard /> </LandingPage>} />
        <Route path='/login' element={<FormPage> <Login /> </FormPage>} />
        <Route path='/register' element={<FormPage> <Register /> </FormPage>} />
        <Route path='/users' element={<SocialPage> <Users /> </SocialPage>} />
        <Route path='/movies' element={<SocialPage> <Movies /> </SocialPage>} />
        <Route path='/user/:username' element={<UserPage />} />
        <Route path='/logout' element={<Logout/>} />
      </Routes>
      <ToastContainer />
    </Container>
  )
}
