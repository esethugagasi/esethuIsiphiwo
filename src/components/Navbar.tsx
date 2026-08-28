import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const NAV_LINKS = [
  { label: "About", path: "/about", sectionId: null },
  { label: "Gallery", path: "/gallery", sectionId: null },
  { label: "Journal", path: null, sectionId: "journal" },
  { label: "Contact", path: null, sectionId: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string | null, sectionId: string | null) => {
    if (path) {
      navigate(path);
    } else if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
<nav
className={`navbar ${scrolled ? "transparent" : "white"}`}
>
      {/* LOGO */}
<div
className="logo"
onClick={() => navigate("/")}
>
    ESETHU ISIPHIWO
</div>

      {/* LINKS */}
      <div className="nav-links">
        {NAV_LINKS.map(({ label, path, sectionId }) => (
          <a
            key={label}
            onClick={(e) => {
              e.stopPropagation();
              handleNavClick(path, sectionId);
            }}
className="nav-link"
          >
            {label}
          </a>
        ))}
      </div>

      {/* HEART */}
<>
  {/* Desktop Icon */}
  <div className="nav-icons">
    ♡
  </div>

  {/* Mobile Menu Button */}
  <div
    className="menu-btn"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? "✕" : "☰"}
  </div>
</>
{menuOpen && (
  <div className="mobile-menu">

    {NAV_LINKS.map(({ label, path, sectionId }) => (
      <div
        key={label}
        className="mobile-link"
        onClick={() => {
          handleNavClick(path, sectionId);
          setMenuOpen(false);
        }}
      >
        {label}
      </div>
    ))}

  </div>
)}
    </nav>

  );
}