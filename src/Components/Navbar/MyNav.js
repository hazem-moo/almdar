import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link , NavLink as MyLink } from 'react-router-dom'
import './MyNav.css'

const MyNav = (props) => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar color="faded" light>
        <div className='container'>
            <NavbarBrand tag={ Link } to="/Home" className="ml-auto"> المدار </NavbarBrand>
            <span className='text-center' > tv </span>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" >
                <i className='fas fa-bars'></i>
            </NavbarToggler>
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                <NavItem>
                    <NavLink exact tag={ MyLink } to="/"> الرئيسية </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
        </div>
    </Navbar>
  );
}

export default MyNav;