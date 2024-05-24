import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({user, setCurrentPage, setLogged}) {

  const handleLogout = () => {
    setLogged(false)
    setCurrentPage(['Login', ''])
  }

  return (

    <Navbar  expand='lg' fixed='top'>
      <Container className='nav-body' fluid>
        <Navbar.Brand className='img-container'>
          <img className="Logoimg" src='VFlogo.png'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-left">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link className='link'>Link</Nav.Link>
          </Nav>
          <Nav className='user-nav'>
            <NavDropdown title={`${user.name}`}>
              <NavDropdown.Item>My Account</NavDropdown.Item>
              <NavDropdown.Item>Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
              onClick={() => {
                handleLogout()
              }}
              >Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;