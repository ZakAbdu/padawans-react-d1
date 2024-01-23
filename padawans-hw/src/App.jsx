import Container from 'react-bootstrap/Container'

import { Movies } from "./components/movies"
import Header from './components/header'


export default function App() {

  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
        <Movies></Movies>
    </Container>
  )

}
