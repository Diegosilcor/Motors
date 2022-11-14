
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="img-container">
          </div>
          <div className="ul-container">
            <ul className="list">
              <Link to="/" className="btn-nav">
                SERVICIOS
              </Link>
              <Link to="/category/" className="btn-nav">
                CONSEJOS PARA EL CARRO
              </Link>
              <Link to="/category/" className="btn-nav">
                EL TALLER
              </Link>
                <Link to="/category/" className="btn-nav">
                UBICACION
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <div className="header-container">
        <h1>TUTO MOTORS</h1>
      </div>
    </header>
  );
};

export default Navbar;