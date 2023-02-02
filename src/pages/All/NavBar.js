import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/img/logo ecmoney2.png";


export const NavBar = () => {
    const activePage = window.location.pathname;
    const [activeLink, setActiveLink] = useState(`${activePage}`);
    const [drop, setDrop] = useState("serviços");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };
    const onDropDown = (value) => {
        setDrop(value);
    };

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="/"
                            className={
                                activeLink === "/"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("home")}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="/sobre"
                            className={
                                activeLink === "/sobre"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("sobre")}
                        >
                            Sobre
                        </Nav.Link>

                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Serviços"
                            menuVariant="dark"
                            className={
                                drop === "serviços"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onDropDown("serviços")}
                        >
                            <NavDropdown.Item href="/para-startups">
                                Para Startups
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/para-empresas-tradicionais">
                                Para empresas tradicionais
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/para-abertura-de-empresas">
                                Para abertura de empresas
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link
                            href="/metodologia"
                            className={
                                activeLink === "/metodologia"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("metodologia")}
                        >
                            Metodologia
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <a href="/entre-em-contato" className="vvd">
                            <button
                                className="vvd"
                                onClick={() => console.log("connect")}
                            >
                                {"ENTRE EM CONTATO"}
                            </button>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
