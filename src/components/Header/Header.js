import { Carousel, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

function Header() {
    return (
        <header>
            {/* Navbar */}
            <Navbar
                className="py-3"
                bg="dark"
                sticky="bottom"
                expand="sm"
                variant="dark"
            >
                <Container>
                    <LinkContainer to="/home">
                        <Navbar.Brand>GymTraine</Navbar.Brand>
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

            {/* Banner */}
            <Container className="my-3">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block banner-img"
                            src="https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block banner-img"
                            src="https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block banner-img"
                            src="https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </header>
    );
}

export default Header;
