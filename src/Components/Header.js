import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar
        color="light"
        light
        expand="md"
        fixed="top"
        style={{ boxShadow: "2px 2px 8px #888888" }}
      >
        <NavbarBrand className="ml-3" href="/">
          <a className="navbar-brand text-success" href="/">
            K S Consultant
          </a>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="hover-effect badge-pill p-3" href="/about">
                Who we are
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="hover-effect badge-pill p-3" href="/services">
                Our services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="hover-effect badge-pill p-3" href="/profile">
                Our experts
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="hover-effect badge-pill p-3" href="/contact">
                Contact us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
