import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link , NavLink as MyLink } from 'react-router-dom'
import './MyNav.css'

const MyNav = (props) => {

  const [collapsed, setCollapsed] = useState( true );

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className='container'>
        <Navbar color="faded" light className='my-nav'>
            <NavbarBrand 
                tag={ Link } to="/" 
                className="ml-auto"
            > الخبر </NavbarBrand>

            <span className='text-center' > tv </span>

            <NavbarToggler onClick={toggleNavbar} className="mr-2" >
                <i className='fas fa-bars'></i>
            </NavbarToggler>
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                <NavItem>
                    <NavLink exact tag={ MyLink } onClick={ toggleNavbar }  to="/"> الرئيسية </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={ Link } onClick={ toggleNavbar } to="/Sport"> رياضه </NavLink>
                </NavItem>
                
                <NavItem>
                    <NavLink tag={ Link } onClick={ toggleNavbar } to="/Political"> سياسة </NavLink>
                </NavItem>
                
                <NavItem>
                    <NavLink tag={ Link } onClick={ toggleNavbar } to="/Art"> الفن </NavLink>
                </NavItem>

                </Nav>
            </Collapse>
        </Navbar>
    </div>
  );
}

export default MyNav;