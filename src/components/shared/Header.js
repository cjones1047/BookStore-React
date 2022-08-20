import './Header.css'

import { Link } from 'react-router-dom'
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const linkStyle = {
    color: 'rgba(0,0,0,.55)',
    textDecoration: 'none'
}

const authenticatedOptions = (
	<>
		<Nav.Item className="nav-element d-flex align-items-center" href="change-password">
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<div className='vr' style={{height:'2em'}}/>
		<Nav.Item className="nav-element d-flex align-items-center" >
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item className="nav-element d-flex align-items-center">
			<Link to='sign-up' style={linkStyle}>
				Sign Up
			</Link>
        </Nav.Item>
		<div className='vr' style={{height:'2em'}}/>
        <Nav.Item className="nav-element d-flex align-items-center">
			<Link to='sign-in' style={linkStyle}>
				Sign In
			</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<div className='vr' style={{height:'1em', opacity:'0'}}/>
		<Nav.Item className="nav-element d-flex align-items-center" >
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Item>
		<div className='vr' style={{height:'2em'}}/>
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
		<Navbar.Collapse className='justify-content-end' style={{width: '0', margin: '0 15px', whiteSpace: 'nowrap'}}>
			{user && (
				<>
					<div className='vr' style={{height:'1em', opacity:'0'}}/>
					<div className='navbar-text mr-2'>Welcome {user.email}</div>
				</>
			)}
		</Navbar.Collapse>
	</Navbar>
)

export default Header
