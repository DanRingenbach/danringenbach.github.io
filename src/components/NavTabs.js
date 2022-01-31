import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
      <Nav m-2 justify variant="tabs" defaultActiveKey={"#home"} className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="#home" onClick={() => handlePageChange('Home')}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#work" onClick={() => handlePageChange('Work')} >Work</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='#contact' onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
        </Nav.Item>
      </Nav>
  );
}

export default NavTabs;
