import { useContext, useState } from 'react';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import { ThemeContext } from '../../contexts/theme';
import { projects, skills, contact } from '../../portfolio';
import './Navbar.css';

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__left">EO.</div>

      <div className="nav__right">
        {/* Desktop menu */}
        <ul className="nav__list">
          {projects.length > 0 && (
            <li>
              <a href="#projects" className="link link--nav">Projects</a>
            </li>
          )}
          {skills.length > 0 && (
            <li>
              <a href="#skills" className="link link--nav">Skills</a>
            </li>
          )}
          {contact?.email && (
            <li>
              <a href="#contact" className="link link--nav">Contact</a>
            </li>
          )}
        </ul>

        {/* Hamburger icon */}
        <button className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>

        {/* Mobile menu */}
        <div className={`nav__mobile-menu ${menuOpen ? 'open' : ''}`}>
          {projects.length > 0 && (
            <a href="#projects" className="link link--nav" onClick={() => setMenuOpen(false)}>Projects</a>
          )}
          {skills.length > 0 && (
            <a href="#skills" className="link link--nav" onClick={() => setMenuOpen(false)}>Skills</a>
          )}
          {contact?.email && (
            <a href="#contact" className="link link--nav" onClick={() => setMenuOpen(false)}>Contact</a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
