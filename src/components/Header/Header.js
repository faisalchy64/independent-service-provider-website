import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { LinkContainer } from "react-router-bootstrap";
import auth from "../../firebase";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

function Header() {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };

    return (
        <Navbar className="py-3 navbar" expand="sm" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <h1 id="logo" className="mb-0">
                        BEFIT
                    </h1>
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
                            {user ? (
                                <button
                                    className="sign-out"
                                    onClick={handleSignOut}
                                >
                                    SINGOUT
                                </button>
                            ) : (
                                <Nav.Link>LOGIN</Nav.Link>
                            )}
                        </CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
