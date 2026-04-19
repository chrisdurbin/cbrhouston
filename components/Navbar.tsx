"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s, box-shadow 0.3s",
        background: scrolled ? "rgba(10,22,40,0.97)" : "transparent",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.3)" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.3rem", letterSpacing: "0.08em", color: "#fff", textTransform: "uppercase" }}>
              CRB Houston
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.18em", color: "var(--gold)", textTransform: "uppercase", marginTop: 2 }}>
              Commercial Remodeling Builders
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 36 }} className="desktop-nav">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:7135550100"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "var(--gold)",
              color: "#fff",
              fontFamily: "var(--font-heading)",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "8px 18px",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
          >
            <Phone size={14} />
            (713) 555-0100
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "none" }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div style={{ background: "var(--navy)", borderTop: "1px solid rgba(200,151,58,0.3)", padding: "16px 24px 24px" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#fff",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:7135550100"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 16,
              color: "var(--gold)",
              fontFamily: "var(--font-heading)",
              fontSize: "1rem",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <Phone size={16} /> (713) 555-0100
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
