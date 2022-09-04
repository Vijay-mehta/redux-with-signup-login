import React  from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
// import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <div>

       <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div> <Nav.Link href="/signup">Signup</Nav.Link>   </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
