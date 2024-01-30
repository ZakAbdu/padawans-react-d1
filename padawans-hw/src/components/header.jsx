import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <Navbar className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand as={NavLink} to='/'>Padawans HW</Navbar.Brand>
                <Nav.Link href='/register'>Register</Nav.Link>
                <Nav.Link as={NavLink} to='/users'>Users</Nav.Link>
                <Nav.Link as={NavLink} to='/movies'>Movies</Nav.Link>
                <Link to='/login'>Login</Link>
            </Container>
        </Navbar>
    )
}
