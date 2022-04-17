import { Carousel, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
import imgone from "../../images/home-bg-1.jpg";
import imgtwo from "../../images/home-bg-2.jpg";
import imgthree from "../../images/home-bg-3.jpg";

function Header() {
    return (
        <header>
            {/* Navbar */}
            <Navbar
                className="py-3"
                // bg="dark"
                fixed="top"
                expand="sm"
                variant="dark"
            >
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

            {/* Banner */}
            <Carousel>
                <Carousel.Item className="banner-img">
                    <img src={imgone} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item className="banner-img">
                    <img src={imgtwo} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item className="banner-img">
                    <img src={imgthree} alt="Third slide" />
                </Carousel.Item>
            </Carousel>
        </header>
    );
}

export default Header;
