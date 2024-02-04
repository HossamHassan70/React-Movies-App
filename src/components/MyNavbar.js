import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLanguage } from '../context/LanguageContext';
import { Dropdown } from 'react-bootstrap';

function MyNavbar() {
  const favCount = useSelector((state) => state.favorites.favCount || 0);
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className='text-light font-weight-bold' as={Link} to="/"><i className="fa-solid fa-clapperboard"></i> 
        <b><span className='text-primary'> Z</span><span className='text-warning'> Movies</span> </b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-light' as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link className='text-light' as={Link} to="/favorites">Favorites</Nav.Link>
            {favCount > 0 && (
              <span className='custom-badge my-2 mx-1' >{`${favCount}`}</span>
            )}
            <Dropdown className="mx-2 language-dropdown">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Language: {language.toUpperCase()}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageChange('ar')}>Arabic</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageChange('fr')}>French</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link className='text-light' as={Link} to="/login">Login</Nav.Link>
            <Nav.Link className='text-light' as={Link} to="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
