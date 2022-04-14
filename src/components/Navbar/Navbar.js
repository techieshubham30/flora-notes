import "./navbar.css";
import { FaSeedling, FaRegUserCircle, FaSignInAlt } from "react-icons/fa";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="logo">
            <FaSeedling className="seedling-logo" />
          </Link>

          <Link to="/" className="brand-name">FloraNotes</Link>
        </div>

        <div className="nav-right">
          <div className="icon-container">
            <a href="#">
              <FaRegUserCircle />
            </a>

            <Link to="/signin">
              <FaSignInAlt />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
