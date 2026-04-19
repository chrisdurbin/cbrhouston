"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)", color: "#fff", paddingTop: 64, paddingBottom: 32 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.4rem", letterSpacing: "0.08em", color: "#fff" }}>CRB Houston</div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.16em", color: "var(--gold)", textTransform: "uppercase", marginTop: 4 }}>Commercial Remodeling Builders</div>
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: 260 }}>
              Houston's trusted partner for commercial remodeling, build-outs, and construction management. Quality work delivered on time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.8rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Quick Links</h4>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Our Services" },
              { href: "/projects", label: "Projects" },
              { href: "/contact", label: "Contact Us" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  marginBottom: 10,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
              >
                <ChevronRight size={14} /> {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.8rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Services</h4>
            {["Commercial Remodeling", "Design & Build", "Build-Outs", "Construction Management", "Free Consultation", "Project Estimation"].map((s) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", marginBottom: 10 }}>
                <ChevronRight size={14} /> {s}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.8rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <a href="tel:7135550100" style={{ display: "flex", alignItems: "flex-start", gap: 12, color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.9rem" }}>
                <Phone size={16} style={{ marginTop: 2, flexShrink: 0, color: "var(--gold)" }} />
                (713) 555-0100
              </a>
              <a href="mailto:info@crbhouston.com" style={{ display: "flex", alignItems: "flex-start", gap: 12, color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.9rem" }}>
                <Mail size={16} style={{ marginTop: 2, flexShrink: 0, color: "var(--gold)" }} />
                info@crbhouston.com
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, color: "rgba(255,255,255,0.65)", fontSize: "0.9rem" }}>
                <MapPin size={16} style={{ marginTop: 2, flexShrink: 0, color: "var(--gold)" }} />
                Houston, Texas
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Commercial Remodeling Builders of Houston. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            <Link href="/contact" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/contact" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
