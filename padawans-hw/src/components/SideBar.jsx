import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export default function SideBar() {
    return (
        <Navbar sticky='top' className='flex-column sidebar'>
            <Nav.Item>
                <Nav.Link as={ NavLink } to='/movies'>Movie Feed</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={ NavLink } to={'/user/'.concat(user.username)}>My Page</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={ NavLink } to='/'>Padawnas Playground</Nav.Link>
            </Nav.Item>
        </Navbar>
    )

}
