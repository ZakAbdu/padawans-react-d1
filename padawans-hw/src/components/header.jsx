import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Navbar className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand href='/'>Padawans HW</Navbar.Brand>
                <Nav.Link href='/register'>Register</Nav.Link>
                <Nav.Link href='/users'>Users</Nav.Link>
                <Nav.Link href='/movies'>Movies</Nav.Link>
                <Link to='/login'>Login</Link>
            </Container>
        </Navbar>
    )
}
