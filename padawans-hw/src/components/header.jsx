import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

export default function Header() {
    return (
        <Navbar classname='bs-body-tertiary'>
            <Container>
                <Navbar.Brand href='/'>Padawans HW</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
