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
import CategoryTest from '../categoryTest/CategoryTest'
import { Link, NavLink } from 'react-router-dom'

function NavBarBootstrap () {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className='navbar'>
          <div className='logo-container'>
            <div className='logo-buscador'>
              <div className='div-logo'>
                <Link to='/'><img src='/images/Group 23.png' alt='' className='logo' /></Link>
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
                  <Link to='/cargaProductos' className='publicar'>Publicar</Link>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
            <div className='div-logo2'>
              <Link to='/'><img src='/images/Group 23.png' alt='' className='logo' /></Link>
            </div>
          </div>
          <Link to='/login'><div className='perfil'>
            <img src='/images/account_circle_filled_24px.png' alt='' className='imagen-perfil' />
            <Link to='/login' className='usuarios'>Usuarios</Link>
            {/* <NavLink to='/' className='item-navbar'><span >Inicio</span></NavLink> */}
          </div>
          </Link>
        </Navbar>
      ))}
    </>
  )
}

export default NavBarBootstrap
