import { FaSearch, FaUser, FaBars } from "react-icons/fa";
import "../styles/NavBar.css";
import logo from "../assets/logo.png";
import frame1 from "../assets/Frame.png";
import frame2 from "../assets/Frame1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="CollegePur Logo" className="logo-icon" />
        <div className="divide">
          <img src={frame1} alt="CollegePur Logo" className="logo-frame" />

          <span className="navbar__brand">CollegePur</span>
          <img src={frame2} alt="CollegePur Logo" className="logo-frame" />
        </div>
      </div>
      <ul className="navbar__links">
        <li className="navbar__item">
          <a href="/" className="navbar__link">
            Home
          </a>
        </li>
        <li className="navbar__item">
          <a href="#about" className="navbar__link">
            About
          </a>
        </li>
        <li className="navbar__item">
          <Link to="/colleges" className="navbar__link">
            Colleges
          </Link>
        </li>
        <li className="navbar__item">
          <a href="#exams" className="navbar__link">
            Exams
          </a>
        </li>
        <li className="navbar__item">
          <a href="#blog" className="navbar__link">
            Blog
          </a>
        </li>
        <li className="navbar__item">
          <a href="#contact" className="navbar__link">
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar__icons">
        <FaSearch className="icon" />
        <FaUser className="icon" />
        <FaBars className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
