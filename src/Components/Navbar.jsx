import React from "react";

const navBase = {
  background: "rgba(12, 12, 12, 0.45)",
  padding: "10px 12px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  backdropFilter: "blur(10px)",
  transition: "transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease",
  boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
  borderBottom: "1px solid transparent",
};

const navInner = {
  display: "flex",
  alignItems: "center",
  gap: 4,
  padding: "8px 10px",
  background: "rgba(18,18,18,0.7)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: 16,
  boxShadow: "0 6px 30px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.02)",
  maxWidth: 1120,
  width: "100%",
  justifyContent: "center",
  overflowX: "auto",
  scrollbarWidth: "none",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
  minWidth: 0,
  WebkitOverflowScrolling: "touch",
};

const brand = {
  color: "#eaeaea",
  fontWeight: 800,
  letterSpacing: 1,
  marginRight: 6,
  padding: "8px 12px",
  borderRadius: 12,
  background: "linear-gradient(90deg, rgba(111,207,151,0.15), rgba(79,172,254,0.12))",
  border: "1px solid rgba(111,207,151,0.28)",
  flex: "0 0 auto",
};

const linkStyle = {
  color: "#cfd8dc",
  textDecoration: "none",
  padding: "10px 12px",
  borderRadius: 12,
  fontSize: "0.96rem",
  fontWeight: 600,
  letterSpacing: "0.3px",
  transition: "color 0.2s, background 0.2s, border 0.2s",
  border: "1px solid transparent",
  display: "inline-block",
  flex: "0 0 auto",
};

const linkHoverStyle = {
  color: "#eafff3",
  background: "linear-gradient(90deg, rgba(111,207,151,0.18), rgba(111,207,151,0.08))",
  border: "1px solid rgba(111,207,151,0.35)",
};

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Languages", href: "#languages" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [hovered, setHovered] = React.useState(null);
  const [visible, setVisible] = React.useState(true);
  const [active, setActive] = React.useState("home");
  const lastScrollRef = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY || 0;
      const last = lastScrollRef.current;
      const scrollingDown = current > last && current > 40;
      setVisible(!scrollingDown);
      lastScrollRef.current = current;

      const sections = ["home", "about", "skills", "languages", "education", "projects", "contact"];
      let currentActive = "home";
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i]);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 200) {
          currentActive = sections[i];
          break;
        }
      }
      setActive(currentActive);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{ ...navBase, transform: visible ? "translateY(0)" : "translateY(-100%)" }}>
      <div style={navInner}>
        <span style={brand}>Nhat.dev</span>
        {navLinks.map((link, idx) => {
          const isActive = active === link.href.replace('#','');
          const style = hovered === idx || isActive ? { ...linkStyle, ...linkHoverStyle } : linkStyle;
          return (
            <a
              key={link.name}
              href={link.href}
              style={style}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {link.name}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;


