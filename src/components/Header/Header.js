import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

function Header() {
    return (
        <Navbar className="py-3 navbar" fixed="top" expand="sm" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <h1 className="mb-0">BEFIT</h1>
                </LinkContainer>
                <Navbar.Toggle aria-controls="nav-menu"></Navbar.Toggle>
                <Navbar.Collapse id="nav-menu">
                    <Nav className="ms-auto">
                        <CustomLink to="/">
                            <Nav.Link>HOME</Nav.Link>
                        </CustomLink>
                        <CustomLink to="/checkout">
                            <Nav.Link>CHECKOUT</Nav.Link>
                        </CustomLink>
                        <CustomLink to="/blogs">
                            <Nav.Link>BLOGS</Nav.Link>
                        </CustomLink>
                        <CustomLink to="/about">
                            <Nav.Link>ABOUT</Nav.Link>
                        </CustomLink>
                        <CustomLink to="/login">
                            <Nav.Link>LOGIN</Nav.Link>
                        </CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
