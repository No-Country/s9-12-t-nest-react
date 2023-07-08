import { Box } from '@mui/material'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import './NavbarBootstrap.css'
import SearchBar from '../Search/SearchBar'
import CategoryTest from '../CategoryTest'

function NavBarBootstrap () {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className='navbar'>
          <div className='logo-container'>
            <div className='logo-buscador'>
              <div className='div-logo'>
                <Navbar.Brand href='#'><img src='/images/Group 23.png' alt='' className='logo' /></Navbar.Brand>
              </div>
              <span className='input'><SearchBar /></span>

            </div>

            <Container className='container'>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement='end'
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} />
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className='justify-content-end  pe-3'>
                    {/* aca va el boton de categorias */}
                    <Nav.Link href='#action1'><CategoryTest /></Nav.Link>
                  </Nav>
                  <div className='form'>
                    <SearchBar />
                  </div>
                  <Nav.Link href='#action1' className='publicar'>Publicar</Nav.Link>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
            <div className='div-logo2'>
              <Navbar.Brand href='#'><img src='/images/Group 23.png' alt='' className='logo' /></Navbar.Brand>
            </div>
          </div>
          <div className='perfil'>
            <img src='/images/account_circle_filled_24px.png' alt='' className='imagen-perfil' />
            <div className='usuarios'>
              <Nav.Link href='#action2'>Usuarios</Nav.Link>

            </div>

          </div>
        </Navbar>
      ))}
    </>
  )
}

export default NavBarBootstrap
