import React, { useState } from 'react';
import { Link} from "react-scroll";
import brand from './amr.svg'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';
  import classes from './navBar.module.scss'
  
const Amr = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar  className={classes.navbar + ' navbar-transparent'} dark id="navbar"   expand="md">
        <div className="container">
        <NavbarBrand className ={classes.navbarBrand} href="/">
          <img src ={brand} alt = "brand"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={classes.navbarNav + " ml-auto"} navbar>
          <NavItem className ={classes.navItem}>
            <Link
            className={classes.navLink + " nav-link"}
    activeClass="active"
    to="head"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
> home </Link>
            </NavItem>
            <NavItem className ={classes.navItem}>
            <Link
             className={classes.navLink + " nav-link"}
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
> about </Link>
            </NavItem>
            <NavItem className ={classes.navItem}>
            <Link
             className={classes.navLink + " nav-link"}
    activeClass="active"
    to="skills"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
> skills </Link>
            </NavItem>
            <NavItem className ={classes.navItem}>
            <Link
             className={classes.navLink + " nav-link"}
    activeClass="active"
    to="service"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
> services </Link>
            </NavItem>
            {/* <NavItem className ={classes.navItem}>
            <Link
            className={classes.navLink + " nav-link"}
    activeClass="active"
    to="client"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>client</Link>
            </NavItem> */}
            <NavItem className ={classes.navItem}>
            <Link
            className={classes.navLink + " nav-link"}
    activeClass="active"
    to="myWork"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {500}
>my work</Link>
            </NavItem>
          </Nav>
        </Collapse>
        </div>
        
      </Navbar>
    )
}
export default Amr;
