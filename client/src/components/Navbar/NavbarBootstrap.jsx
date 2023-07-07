import { Box } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./NavbarBootstrap.css";


function NavBarBootstrap() {
    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand} className="navbar">
                    <Navbar.Brand href="#"><img src="/images/Group 19.png" alt="" className="logo" /></Navbar.Brand>
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>

                                <Nav className="justify-content-end  pe-3">

                                    {/* aca va el boton de categorias */}
                                    <Nav.Link href="#action1">Categorias</Nav.Link>


                                </Nav>
                                <div className="form">

                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="buscador"
                                            aria-label="Search"
                                        />
                                        <Button variant="outline-success" style={{ background: "white" }} className='boton-buscador'><img src="/images/container.png" alt="" className="lupa" /></Button>
                                    </Form>
                                </div>
                                <Nav.Link href="#action1">Publicar</Nav.Link>

                                {/* aca hay que incorporar el componente buscador */}


                                {/* fin del componente buscador */}

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>


                    <div className='perfil'>
                        <img src="/images/account_circle_filled_24px.png" alt="" />
                        <Nav.Link href="#action2">Usuarios</Nav.Link>
                    </div>


                </Navbar>
            ))}
        </>
    );
}

export default NavBarBootstrap;