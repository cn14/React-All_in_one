import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
const Navigation = () => {
	return (
		<Navbar expand="lg">
			<Navbar.Brand className="nav__brand " to="/">
				Nakshatra
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<NavLink
						activeClassName="active__link"
						className="nav-link"
						exact
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						activeClassName="active__link"
						className="nav-link"
						to="/about"
					>
						About
					</NavLink>
					<NavLink
						activeClassName="active__link"
						className="nav-link"
						to="/services"
					>
						Services
					</NavLink>
					<NavLink
						activeClassName="active__link"
						className="nav-link"
						to="/contact"
					>
						Contact
					</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
