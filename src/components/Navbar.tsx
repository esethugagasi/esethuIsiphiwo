import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { label: "About", path: "/about", sectionId: null },
  { label: "Gallery", path: "/gallery", sectionId: null },
  { label: "Journal", path: null, sectionId: "journal" },
  { label: "Contact", path: null, sectionId: "contact" },
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px 40px",
        fontSize: "12px",
        letterSpacing: "1px",
        zIndex: 1000,
        background: scrolled ? "transparent" : "#ffffff",
        color: scrolled ? "#ffffff" : "#000000",
        transition: "all 0.3s ease",
        boxSizing: "border-box",
      }}
    >
      {/* LOGO */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          navigate("/");
        }}
        style={{ fontWeight: 900, fontSize: "12px", letterSpacing: "1.5px", cursor: "pointer" }}
      >
        ESETHU ISIPHIWO
      </div>

      {/* LINKS */}
      <div style={{ display: "flex", gap: "40px" }}>
        {NAV_LINKS.map(({ label, path, sectionId }) => (
          <a
            key={label}
            onClick={(e) => {
              e.stopPropagation();
              handleNavClick(path, sectionId);
            }}
            style={{
              cursor: "pointer",
              color: "inherit",
              textDecoration: "none",
              letterSpacing: "1px",
              fontSize: "12px",
            }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* HEART */}
      <div style={{ fontSize: "20px", cursor: "pointer" }}>♡</div>
    </nav>
  );
}