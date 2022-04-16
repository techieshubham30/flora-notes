import "./navbar.css";
import { FaSeedling, FaRegUserCircle, FaSignInAlt } from "react-icons/fa";
import { useAuth} from "../../contexts/auth-context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const {
    auth: { isAuthenticated },
    setAuth,
  } = useAuth();

  const signoutHandler=()=>{
    localStorage.removeItem("TOKEN");
    setAuth({
      isAuthenticated: false,
      token: "",
    });
    navigate("/");
  };
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
            <Link to="/">
              <FaRegUserCircle />
            </Link>

            <Link to="/signin" onClick={signoutHandler}>
              <FaSignInAlt />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
