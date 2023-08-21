import { Container, Nav, Navbar } from "react-bootstrap"
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa"

function Appbar() {
    const links = [
        { name: "Home", href: "home" },
        { name: "About", href: "about" },
        { name: "Tech Stack", href: "tech-stack" },
        { name: "Projects", href: "projects" },
        { name: "Contact", href: "contact" }
    ]
    return (
        <Navbar fixed="top" expand="lg">
            <Container>
                <Navbar.Brand className="fw-bold">DAMI</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        {links.map(link => <Nav.Link key={link.name}>{link.name}</Nav.Link>)}
                        <Nav.Link>
                            <FaGithub />
                        </Nav.Link>
                        <Nav.Link>
                            <FaLinkedin />
                        </Nav.Link>
                        <Nav.Link>
                            <FaFacebook />
                        </Nav.Link>
                        <Nav.Link>
                            <FaEnvelope />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
//TODO: Use Parralax effects for this projects

export default Appbar