import Container from 'react-bootstrap/Container'
import Header from './components/header'
import Body from './components/Body'
import Register from './components/forms/register'
import Whiteboard from './components/Whiteboard'

export default function App() {

  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      <Body>
        <Register></Register>

      </Body>
      <Whiteboard></Whiteboard>

    </Container>
  )

}
