import './Header.css'

import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
	<>
		<Nav.Link className="nav-element" href="change-password">
			Change Password
		</Nav.Link>
		<div className='vr' />
		<Nav.Link className="nav-element" href="sign-out">
			Sign Out
		</Nav.Link>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Link className="nav-element" href="sign-up">
		    Sign Up
        </Nav.Link>
		<div className='vr' />
        <Nav.Link className="nav-element" href="sign-in">
		    Sign In
        </Nav.Link>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Link className="nav-element" href="/">
			Home
		</Nav.Link>
		<div className='vr' />
	</>
)

const Header = ({ user }) => (
	<Navbar className='whole-navbar' bg='light' variant='light' expand='md' style={{borderRadius: '15px', boxShadow: '0.25px 0.25px 5px black, -0.25px -0.25px 5px black'}}>
		<Navbar.Brand className='m-10' style={{width: '0', paddingLeft: '15px'}}>
			BookTag
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' style={{marginRight: '15px'}}/>
		<Navbar.Collapse id='basic-navbar-nav' style={{justifyContent: 'center', width: '100%', paddingRight: '15px'}}>
			<Nav>
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
		<Navbar.Collapse className='justify-content-end' style={{width: '0', margin: '15px', whiteSpace: 'nowrap'}}>
			{user && (
				<span className='navbar-text mr-2'>Welcome, {user.email}</span>
			)}
		</Navbar.Collapse>
	</Navbar>
)

export default Header
