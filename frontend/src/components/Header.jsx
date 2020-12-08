import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Container, Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'

const Header = () => {
    return (
        <>
        <Navbar bg="#ffffff" expand="lg" style={{boxShadow: '0px 3px 6px #0000000f' }}>
            <Container>
                <LinkContainer to ="/">
                <Navbar.Brand >
                <img
        src="https://dashboard.myways.in/favicon.png"
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="My Ways"
      />
                    
                    </Navbar.Brand>
                </LinkContainer>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavDropdown title="For You" id="basic-nav-dropdown"  active>
                        <LinkContainer to ="/">
                        <NavDropdown.Item  bg="#ffffff">Find Matching Internships</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to ="/">
                        <NavDropdown.Item >Hire Right Talent</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to ="/">
                        <NavDropdown.Item >Work From Home</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                    
                    <LinkContainer to='/'>
                    <Nav.Link className='mx-3' >Instant Apply</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/'>
                    <Nav.Link >Pricing</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/'>
                    <Nav.Link className='mx-3'>About us</Nav.Link>
                    </LinkContainer>
                        
                        
                        
                    </Nav>
                    </Navbar.Collapse>
                    <LinkContainer to='/signup'>
                    <Nav.Link >SIGN UP</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to = '/login' style={{borderRadius:'27px', backgroundColor:'#7ECB20', borderStyle:'none', padding:'10px 30px'}}>
                    <Button  >LOGIN</Button>
                    </LinkContainer>
                    
                        
                        
            </Container>
        </Navbar>
        </>
    )
}

export default Header
