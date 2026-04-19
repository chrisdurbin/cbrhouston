import Link from "next/link";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: <Target size={32} />,
    title: "Precision",
    desc: "Every measurement, every material, every phase is executed with meticulous attention to detail. We don't cut corners — ever.",
  },
  {
    icon: <Eye size={32} />,
    title: "Transparency",
    desc: "You'll always know where your project stands. Clear pricing, honest timelines, and proactive communication from day one.",
  },
  {
    icon: <Heart size={32} />,
    title: "Commitment",
    desc: "Your success is our success. We treat every project — large or small — with the same dedication and professional standard.",
  },
];

const team = [
  {
    initials: "GM",
    name: "General Manager",
    title: "Principal Contractor",
    bio: "With deep roots in Houston's commercial construction market, our principal contractor brings hands-on experience across retail, medical, and restaurant sectors.",
  },
  {
    initials: "PM",
    name: "Project Manager",
    title: "Senior Project Manager",
    bio: "Overseeing schedules, subcontractors, and client communication, our project management team ensures every build runs on time and on budget.",
  },
  {
    initials: "SD",
    name: "Site Director",
    title: "Field Superintendent",
    bio: "Our field superintendents are on-site daily, managing crews and maintaining the quality standards that define every CRB Houston project.",
  },
];

export default function About() {
  return (
    <>
      {/* Page Header */}
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
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>About Us</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, textTransform: "uppercase", color: "#fff", lineHeight: 1.02 }}>
            Built on Trust,<br />
            <span style={{ color: "var(--gold)" }}>Driven by Results</span>
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: "var(--gold)" }} />
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>Our Story</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, textTransform: "uppercase", color: "var(--navy)", marginBottom: 24, lineHeight: 1.08 }}>
              Houston's Commercial Construction Specialists
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--slate)", marginBottom: 20 }}>
              Commercial Remodeling Builders of Houston was founded with one mission: to bring professional-grade commercial construction to Houston businesses at every stage of their growth.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--slate)", marginBottom: 20 }}>
              We saw too many business owners stuck with contractors who missed deadlines, hid costs, and left them without a single point of accountability. We built CRB Houston to be the answer to that problem — a contractor you can call, trust, and count on.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--slate)" }}>
              From fast-casual restaurant fit-outs to multi-suite medical office renovations, we bring the same professional discipline to every job regardless of size. Houston deserves better builders — and we're here to deliver.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { value: "200+", label: "Projects Completed" },
              { value: "15+", label: "Years Experience" },
              { value: "50+", label: "Happy Clients" },
              { value: "100%", label: "Licensed & Insured" },
            ].map((s, i) => (
              <div key={i} style={{
                background: i % 2 === 0 ? "var(--navy)" : "var(--gold)",
                padding: "36px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "2.4rem", fontWeight: 800, color: "#fff" }}>{s.value}</div>
                <div style={{ fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "96px 24px", background: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: "var(--gold)" }} />
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>Our Values</span>
              <div style={{ width: 32, height: 2, background: "var(--gold)" }} />
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, textTransform: "uppercase", color: "var(--navy)" }}>
              What We Stand For
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
            {values.map((v, i) => (
              <div key={i} style={{
                background: "#fff",
                padding: "48px 36px",
                borderTop: "4px solid var(--gold)",
                textAlign: "center",
              }}>
                <div style={{ color: "var(--gold)", marginBottom: 20, display: "flex", justifyContent: "center" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem", fontWeight: 700, textTransform: "uppercase", color: "var(--navy)", marginBottom: 16, letterSpacing: "0.04em" }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--slate)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: "var(--gold)" }} />
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>Our People</span>
              <div style={{ width: 32, height: 2, background: "var(--gold)" }} />
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, textTransform: "uppercase", color: "var(--navy)" }}>
              The Team Behind the Build
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
            {team.map((member, i) => (
              <div key={i} style={{ background: "var(--cream)", padding: "40px 32px" }}>
                <div style={{
                  width: 72, height: 72,
                  background: "var(--navy)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: 700, color: "var(--gold)",
                  marginBottom: 20,
                }}>
                  {member.initials}
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", color: "var(--navy)", letterSpacing: "0.04em" }}>{member.name}</h3>
                <div style={{ fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, margin: "6px 0 16px" }}>{member.title}</div>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--slate)" }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "var(--navy)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, textTransform: "uppercase", color: "#fff", marginBottom: 20 }}>
            Let's Build Something Great Together
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: 1.8, marginBottom: 36 }}>
            Contact our team today for a free consultation. We'll assess your project and put together a detailed estimate at no cost to you.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "var(--gold)", color: "#fff",
            fontFamily: "var(--font-heading)", fontWeight: 700,
            fontSize: "0.85rem", letterSpacing: "0.12em",
            textTransform: "uppercase", padding: "18px 44px",
            textDecoration: "none",
          }}>
            Contact Us Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
