import React, { Component, Fragment, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const CompNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="fixed-top" color="info" dark expand="md">
      <div className="container">
        <NavbarBrand href="/">FarmCode</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                TUTORIAL
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem >
                  <Link to="/List-Belajar-html">HTML</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/List-Belajar-css">CSS</Link>
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem>
                  <Link to="/List-Belajar-javascript">JAVASCRIPT</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/List-Belajar-react">REACT JS</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/List-Belajar-bootstrap">BOOTSTRAP</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/List-Belajar-sass">SASS</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </div>
    </Navbar>
  );
}

export default CompNavbar; 