"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2, Wrench, ClipboardList, HardHat, Ruler, Layers } from "lucide-react";

const services = [
  {
    icon: <Wrench size={28} />,
    title: "Commercial Remodeling",
    desc: "Transform your existing space to match your evolving business needs. From cosmetic upgrades to full interior overhauls, we deliver precision craftsmanship.",
  },
  {
    icon: <Ruler size={28} />,
    title: "Design & Build",
    desc: "One team from concept to completion. We unify design and construction for seamless execution, consistent quality, and no gaps in communication.",
  },
  {
    icon: <Building2 size={28} />,
    title: "Build-Outs",
    desc: "Shell spaces transformed into fully functional commercial environments — tailored to retail, medical, restaurant, office, and more.",
  },
  {
    icon: <ClipboardList size={28} />,
    title: "Construction Management",
    desc: "We oversee every phase of your project — scheduling, subcontractors, budgets, and inspections — so you can focus on your business.",
  },
  {
    icon: <HardHat size={28} />,
    title: "Ground-Up Construction",
    desc: "From site prep to ribbon-cutting, we manage full ground-up builds to your exact specifications and timeline.",
  },
  {
    icon: <Layers size={28} />,
    title: "Free Consultation",
    desc: "Start with a no-obligation consultation. We'll assess your vision, scope your project, and deliver a detailed estimate at no cost.",
  },
];

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "15+", label: "Years of Experience" },
  { value: "100%", label: "Licensed & Insured" },
  { value: "Texas", label: "Based in Houston" },
];

const whyUs = [
  "On-time project delivery, every time",
  "Transparent pricing with no surprises",
  "Single point of contact from start to finish",
  "Licensed, bonded, and fully insured",
  "Experienced in all commercial sectors",
  "Meticulous quality control at every phase",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #0a1628 0%, #1e3a5f 60%, #0a1628 100%)",
        overflow: "hidden",
      }}>
        {/* Geometric background accent */}
        <div style={{
          position: "absolute", inset: 0,
          background: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8973a' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />

        {/* Gold diagonal stripe */}
        <div style={{
          position: "absolute",
          top: 0, right: "15%", bottom: 0,
          width: 4,
          background: "linear-gradient(180deg, transparent, var(--gold), transparent)",
          opacity: 0.4,
        }} />
        <div style={{
          position: "absolute",
          top: 0, right: "30%", bottom: 0,
          width: 1,
          background: "linear-gradient(180deg, transparent, rgba(200,151,58,0.3), transparent)",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 700 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <div style={{ width: 32, height: 2, background: "var(--gold)" }} />
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>
                Houston, Texas
              </span>
            </div>

            <h1 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.02,
              color: "#fff",
              letterSpacing: "0.01em",
              marginBottom: 28,
              textTransform: "uppercase",
            }}>
              Commercial<br />
              <span style={{ color: "var(--gold)" }}>Remodeling</span><br />
              Built Right.
            </h1>

            <p style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 520,
              marginBottom: 40,
              fontWeight: 300,
            }}>
              From restaurant fit-outs to full office renovations — CRB Houston delivers commercial construction with unmatched precision, on-time delivery, and transparent communication.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "var(--gold)", color: "#fff",
                fontFamily: "var(--font-heading)", fontWeight: 700,
                fontSize: "0.85rem", letterSpacing: "0.12em",
                textTransform: "uppercase", padding: "16px 36px",
                textDecoration: "none", transition: "background 0.2s, transform 0.15s",
              }}>
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <Link href="/services" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "transparent", color: "#fff",
                fontFamily: "var(--font-heading)", fontWeight: 600,
                fontSize: "0.85rem", letterSpacing: "0.12em",
                textTransform: "uppercase", padding: "15px 36px",
                border: "1.5px solid rgba(255,255,255,0.4)",
                textDecoration: "none", transition: "border-color 0.2s, color 0.2s",
              }}>
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.5 }}>
          <div style={{ width: 1, height: 48, background: "var(--gold)", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff" }}>Scroll</span>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "var(--gold)", padding: "0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                padding: "28px 24px",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.3)" : "none",
                textAlign: "center",
              }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem", fontWeight: 800, color: "#fff", letterSpacing: "0.02em" }}>{s.value}</div>
                <div style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: "var(--gold)" }} />
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>Who We Are</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, textTransform: "uppercase", lineHeight: 1.05, color: "var(--navy)", marginBottom: 24 }}>
              Houston's Commercial Construction Partner
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--slate)", marginBottom: 20 }}>
              Commercial Remodeling Builders of Houston is a full-service commercial construction firm specializing in remodeling, tenant build-outs, and design-build projects across the Greater Houston area.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--slate)", marginBottom: 36 }}>
              We work with restaurant operators, medical practices, retailers, and property managers who demand quality, accountability, and a contractor they can trust. Our team brings hands-on expertise to every phase — from the first site walk to the final walkthrough.
            </p>
            <Link href="/about" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: "var(--font-heading)", fontWeight: 700,
              fontSize: "0.82rem", letterSpacing: "0.12em",
              textTransform: "uppercase", color: "var(--navy)",
              textDecoration: "none", borderBottom: "2px solid var(--gold)",
              paddingBottom: 2, transition: "color 0.2s",
            }}>
              Learn More About Us <ArrowRight size={14} />
            </Link>
          </div>

          <div>
            {/* Visual placeholder - in production, replace with a real project photo */}
            <div style={{
              position: "relative",
              background: "var(--navy-mid)",
              aspectRatio: "4/3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, var(--navy) 0%, var(--steel) 100%)",
              }} />
              <div style={{
                position: "relative", zIndex: 1,
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: 12, opacity: 0.6,
              }}>
                <Building2 size={64} color="var(--gold)" />
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                  Your Project Photo Here
                </span>
              </div>
              {/* Gold corner accent */}
              <div style={{ position: "absolute", bottom: 0, right: 0, width: 80, height: 80, borderTop: "4px solid var(--gold)", borderLeft: "4px solid var(--gold)", margin: "0 0 16px 16px" }} />
              <div style={{ position: "absolute", top: 0, left: 0, width: 80, height: 80, borderBottom: "4px solid var(--gold)", borderRight: "4px solid var(--gold)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "96px 24px", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: "var(--gold)" }} />
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>What We Do</span>
              <div style={{ width: 32, height: 2, background: "var(--gold)" }} />
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, textTransform: "uppercase", color: "var(--navy)" }}>
              Our Services
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 2 }}>
            {services.map((s, i) => (
              <div key={i} style={{
                background: "#fff",
                padding: "40px 36px",
                borderBottom: "3px solid transparent",
                transition: "border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderBottomColor = "var(--gold)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderBottomColor = "transparent";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ color: "var(--gold)", marginBottom: 20 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 700, textTransform: "uppercase", color: "var(--navy)", marginBottom: 12, letterSpacing: "0.04em" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.75, color: "var(--slate)" }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/services" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "var(--navy)", color: "#fff",
              fontFamily: "var(--font-heading)", fontWeight: 700,
              fontSize: "0.85rem", letterSpacing: "0.12em",
              textTransform: "uppercase", padding: "16px 40px",
              textDecoration: "none",
            }}>
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: "96px 24px", background: "var(--navy)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -60, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(200,151,58,0.15)" }} />
        <div style={{ position: "absolute", right: -20, top: -20, width: 240, height: 240, borderRadius: "50%", border: "1px solid rgba(200,151,58,0.1)" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative", zIndex: 1 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: "var(--gold)" }} />
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>Why Choose Us</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, textTransform: "uppercase", color: "#fff", lineHeight: 1.05, marginBottom: 24 }}>
              The CRB Houston Difference
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "rgba(255,255,255,0.65)", marginBottom: 36 }}>
              We understand that commercial construction isn't just about building — it's about minimizing disruption, protecting your investment, and delivering results you can be proud of.
            </p>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "var(--gold)", color: "#fff",
              fontFamily: "var(--font-heading)", fontWeight: 700,
              fontSize: "0.85rem", letterSpacing: "0.12em",
              textTransform: "uppercase", padding: "16px 36px",
              textDecoration: "none",
            }}>
              Start Your Project <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {whyUs.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <CheckCircle2 size={20} color="var(--gold)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", fontWeight: 400 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{ padding: "80px 24px", background: "var(--gold)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, textTransform: "uppercase", color: "#fff", letterSpacing: "0.02em" }}>
              Ready to Start Your Project?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", marginTop: 8 }}>Contact us today for a free consultation and estimate.</p>
          </div>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "var(--navy)", color: "#fff",
            fontFamily: "var(--font-heading)", fontWeight: 700,
            fontSize: "0.85rem", letterSpacing: "0.12em",
            textTransform: "uppercase", padding: "18px 44px",
            textDecoration: "none", whiteSpace: "nowrap",
            transition: "background 0.2s",
          }}>
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
