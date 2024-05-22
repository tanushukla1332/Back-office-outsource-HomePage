import { NavDropdown, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import outSourcelogo from '../../../public/Image/outSourcelogo.png';
import Phone from '../../../public/Image/phone.png';

import './Header.css'

export default function Header() {



    return (
        <>
            <Navbar bg="light" expand="lg" className="d-none d-lg-flex" style={{ maxHeight: "80px" }}>
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src={outSourcelogo} alt="" style={{ height: "50px" }} className='ps-5' />
                    </Navbar.Brand>
                    <Nav className="ml-auto d-flex gap-4">
                        <Nav.Link href="#home" className='d-flex align-items-center  gap-3'>
                            <div className="p-2 d-flex justify-content-center align-items-center text-center" style={{ backgroundColor: "#061B49", borderRadius: "50%" }}>
                                <img src={Phone} alt="" className='img-fluid' style={{ width: "24px", height: "24px" }}/>
                            </div>
                            <p style={{ fontSize: '18px', fontWeight: '550', color: "#252525", margin: "0" }}>0481612016</p>
                        </Nav.Link>
                        <Nav.Link className='d-flex align-items-center justify-content-center'>
                            <Button className='for-header-button'>
                                Free Consultation
                            </Button>
                        </Nav.Link>

                    </Nav>
                </Container>
                <br />
                <br />
            </Navbar>
            <Navbar expand="lg" style={{ backgroundColor: "#FE5A0E" }} className='header d-flex justify-content-center align-items-center'>
                <Container fluid>
                    <Navbar.Brand as={Link} to="/" className="d-lg-none">
                        <img src={outSourcelogo} alt="" style={{ height: "50px" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className=" mx-auto p-0 d-flex align-items-center gap-1 gap-lg-5 gap-xl-5  ga-md-5 navbar-header justify-content-center" navbarScroll>
                            <Nav.Link as={Link} to="/doctors">Home</Nav.Link>
                            <Nav.Link as={Link} to="/doctors">About Company</Nav.Link>
                            <Nav.Link as={Link} to="/health">Our Services</Nav.Link>
                            <Nav.Link as={Link} to="/blog">How it Works</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Career</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Reach Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>








        </>
    );
}

