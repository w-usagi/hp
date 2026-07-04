import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
  <FaBars
    className="menu-icon"
    onClick={() => setIsOpen(!isOpen)}
  />

  {isOpen && (
    <div
      className="overlay"
      onClick={() => setIsOpen(false)}
    />
  )}

  <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/profile">Profile</Link>
    </li>
  </ul>
</nav>
  );
}

export default Navbar;