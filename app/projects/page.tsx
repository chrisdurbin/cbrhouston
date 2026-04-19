"use client";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

const projects = [
  {
    category: "Restaurant Remodel",
    title: "Fast-Casual Restaurant Build-Out",
    location: "Houston, TX",
    size: "2,400 sq ft",
    desc: "Complete interior build-out of a fast-casual dining concept in a Class-A retail strip center. Scope included demo, framing, plumbing rough-in, commercial kitchen hood system, custom millwork, and all finishes.",
  },
  {
    category: "Medical Office",
    title: "Multi-Suite Medical Office Renovation",
    location: "Houston, TX",
    size: "4,800 sq ft",
    desc: "Full interior renovation of a multi-tenant medical office building. Work included ADA upgrades, exam room buildout, nurse stations, lead-lined radiology walls, and complete MEP upgrades.",
  },
  {
    category: "Retail Build-Out",
    title: "Specialty Retail Store",
    location: "Greater Houston Area",
    size: "1,800 sq ft",
    desc: "Tenant improvement build-out for a specialty retailer relocating to a new center. Featured custom display walls, polished concrete floors, and a complete lighting redesign to match the brand's aesthetic.",
  },
  {
    category: "Office Renovation",
    title: "Corporate Office Suite Remodel",
    location: "Houston, TX",
    size: "6,200 sq ft",
    desc: "Ground-up interior renovation of a multi-floor corporate office. Included open floor plan conversion, glass-walled conference rooms, server room, break room, and complete finish upgrades.",
  },
  {
    category: "Restaurant Build-Out",
    title: "Full-Service Restaurant",
    location: "Houston, TX",
    size: "3,600 sq ft",
    desc: "Design-build project for a full-service dining concept. Managed architecture, permitting, and construction as a unified team. Included full commercial kitchen, bar, and custom interiors.",
  },
  {
    category: "Ground-Up",
    title: "Stand-Alone Commercial Building",
    location: "Greater Houston Area",
    size: "5,000 sq ft",
    desc: "Ground-up construction of a standalone commercial facility. CRB Houston managed site work, concrete, framing, roofing, MEP, and all interior and exterior finishes.",
  },
];

export default function Projects() {
  return (
    <>
      {/* Header */}
      <section style={{
        background: "linear-gradient(135deg, var(--navy) 0%, var(--steel) 100%)",
        padding: "160px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: "var(--gold)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: "var(--gold)" }} />
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>Our Portfolio</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, textTransform: "uppercase", color: "#fff", lineHeight: 1.02 }}>
            Projects That<br />
            <span style={{ color: "var(--gold)" }}>Speak for Themselves</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", maxWidth: 560, lineHeight: 1.8, marginTop: 20 }}>
            Every project below represents our commitment to quality, accountability, and on-time delivery across the Greater Houston area.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32 }}>
            {projects.map((p, i) => (
              <div key={i} style={{
                background: "#fff",
                border: "1px solid rgba(10,22,40,0.1)",
                overflow: "hidden",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(10,22,40,0.12)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                {/* Project image placeholder */}
                <div style={{
                  background: i % 3 === 0 ? "var(--navy)" : i % 3 === 1 ? "var(--steel)" : "#1a2e4a",
                  height: 220,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}>
                  <Building2 size={48} color="rgba(200,151,58,0.5)" />
                  <div style={{
                    position: "absolute",
                    top: 16, left: 16,
                    background: "var(--gold)",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#fff",
                    padding: "5px 12px",
                    fontWeight: 700,
                  }}>
                    {p.category}
                  </div>
                </div>

                <div style={{ padding: "28px 28px 32px" }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 700, textTransform: "uppercase", color: "var(--navy)", letterSpacing: "0.04em", marginBottom: 10 }}>
                    {p.title}
                  </h3>
                  <div style={{ display: "flex", gap: 20, marginBottom: 16 }}>
                    <span style={{ fontSize: "0.78rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.location}</span>
                    <span style={{ fontSize: "0.78rem", color: "var(--slate)", letterSpacing: "0.08em" }}>{p.size}</span>
                  </div>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--slate)" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder note */}
          <div style={{
            marginTop: 60,
            background: "var(--cream)",
            border: "1px solid rgba(200,151,58,0.3)",
            borderLeft: "4px solid var(--gold)",
            padding: "28px 32px",
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}>
            <Building2 size={32} color="var(--gold)" style={{ flexShrink: 0 }} />
            <div>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, textTransform: "uppercase", color: "var(--navy)", marginBottom: 6 }}>More Projects Coming Soon</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--slate)", lineHeight: 1.7 }}>
                As we complete new projects, this portfolio will grow. Add your real project photos and descriptions by replacing the placeholder content in the <code style={{ background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: 3, fontSize: "0.85em" }}>app/projects/page.tsx</code> file.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "var(--navy)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, textTransform: "uppercase", color: "#fff", marginBottom: 20 }}>
            Ready to Add Your Project to This List?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: 1.8, marginBottom: 36 }}>
            Let's talk about your next commercial construction project. Free consultation, detailed estimate, no commitment required.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "var(--gold)", color: "#fff",
            fontFamily: "var(--font-heading)", fontWeight: 700,
            fontSize: "0.85rem", letterSpacing: "0.12em",
            textTransform: "uppercase", padding: "18px 44px",
            textDecoration: "none",
          }}>
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
