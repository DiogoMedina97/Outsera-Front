import { useState } from "react";
import { Container, Navbar as NavbarBS, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router";

// --------------------------------------------------

const HomeLayout = ({ children }: PropsWithChildren) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar toggleSidebar={() => setShowSidebar((s) => !s)} />
      <div className="flex-fill d-flex flex-row">
        <Sidebar show={showSidebar} onHide={() => setShowSidebar(false)} />
        <main className="flex-fill p-3">
          {children}
        </main>
      </div>
    </div>
  );
};

// --------------------------------------------------

interface NavbarProps {
  readonly toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => (
  <NavbarBS expand="md" bg="dark" data-bs-theme="dark">
    <Container fluid className="justify-content-start">
      <NavbarBS.Toggle className="me-3" onClick={toggleSidebar} />
      <NavbarBS.Brand className="m-0">Outsera</NavbarBS.Brand>
    </Container>
  </NavbarBS>
);

// --------------------------------------------------

interface SidebarProps {
  readonly show: boolean;
  readonly onHide: () => void;
}

const Sidebar = ({ show, onHide }: SidebarProps) => (
  <Offcanvas show={show} responsive="md" className="bg-body-tertiary">
    <Offcanvas.Header onHide={onHide} closeButton />
    <Offcanvas.Body>
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <NavLink to="/" onClick={onHide}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/list" onClick={onHide}>List</NavLink>
            </li>
          </ul>
        </nav>
      </aside>        
    </Offcanvas.Body>
  </Offcanvas>
);

// --------------------------------------------------

export default HomeLayout;
