import React from 'react';
import {FileText, Home, MessageCircle, User} from 'react-feather';
import {Container, Navbar, Nav} from 'react-bootstrap';
import Logo from '../images/icons/logos/logo.png';

export default function Header() {
    return (
        <header className='header'>
            <Navbar expand='lg' sticky='top'>
                <Container fluid className='container'>
                    <Navbar.Brand href='/'><img src={Logo} width='45' height='45' id='nav-logo' alt='nav-logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto nav-links' id='nav'>
                            <li className='nav-links'><Nav.Link href='/' className='nav-links'><Home /> Home</Nav.Link></li>
                            <li className='nav-links'><Nav.Link href='/about' className='nav-links'><User /> About</Nav.Link></li>
                            <li className='nav-links'><Nav.Link href='/projects' className='nav-links'><FileText /> Projects</Nav.Link></li>
                            <li className='nav-links'><Nav.Link href='/contact' className='nav-links'><MessageCircle /> Contact</Nav.Link></li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}