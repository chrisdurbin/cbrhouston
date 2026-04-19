import Link from "next/link";
import { ArrowRight, Wrench, Ruler, Building2, ClipboardList, HardHat, Layers, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: <Wrench size={40} />,
    title: "Commercial Remodeling",
    tagline: "Reinvent Your Space",
    desc: "Whether you're revitalizing an aging retail space, updating a medical suite, or transforming a restaurant interior, our remodeling teams deliver high-quality results that minimize downtime and maximize impact.",
    features: [
      "Interior demolition and reconstruction",
      "Flooring, ceilings, and wall finishes",
      "Electrical and plumbing upgrades",
      "ADA compliance upgrades",
      "Custom millwork and cabinetry",
    ],
  },
  {
    icon: <Ruler size={40} />,
    title: "Design & Build",
    tagline: "One Team, One Vision",
    desc: "Our integrated design-build approach keeps your project cohesive from the first sketch to final inspection. No gaps between architect and builder — just one accountable team driving your vision forward.",
    features: [
      "Space planning and concept design",
      "Material and finish selection",
      "Permit drawings and submissions",
      "Full construction execution",
      "One contract, one team",
    ],
  },
  {
    icon: <Building2 size={40} />,
    title: "Tenant Build-Outs",
    tagline: "Shell to Spectacular",
    desc: "Transform a raw shell space into a fully operational commercial environment. We work alongside landlords, tenants, and property managers to deliver build-outs that check every box on time and within budget.",
    features: [
      "Restaurant and food service build-outs",
      "Medical and dental office fit-outs",
      "Retail and showroom build-outs",
      "Office suites and co-working spaces",
      "Landlord coordination and TI management",
    ],
  },
  {
    icon: <ClipboardList size={40} />,
    title: "Construction Management",
    tagline: "Managed End-to-End",
    desc: "Hire CRB Houston as your construction manager and gain a professional advocate who keeps your contractors accountable, your schedule on track, and your budget intact.",
    features: [
      "Subcontractor procurement and oversight",
      "Schedule management and reporting",
      "Budget tracking and cost control",
      "Quality assurance and inspections",
      "Owner representation",
    ],
  },
  {
    icon: <HardHat size={40} />,
    title: "Ground-Up Construction",
    tagline: "From Foundation to Finish",
    desc: "Need to build from the ground up? We manage full new-construction projects for commercial clients — coordinating every trade and delivering a turnkey facility built to your exact specifications.",
    features: [
      "Site work and foundation",
      "Structural framing",
      "MEP systems coordination",
      "Exterior envelope and roofing",
      "Interior finish-out",
    ],
  },
  {
    icon: <Layers size={40} />,
    title: "Free Consultation & Estimating",
    tagline: "No Cost to Get Started",
    desc: "Not sure where to start? Our team offers free, no-obligation consultations and detailed project estimates. We'll walk your site, understand your goals, and give you a realistic picture of cost and timeline.",
    features: [
      "Site walkthrough and assessment",
      "Scope of work development",
      "Detailed line-item estimates",
      "Timeline projections",
      "No commitment required",
    ],
  },
];

const sectors = [
  "Restaurants & Food Service",
  "Medical & Dental Offices",
  "Retail & Showrooms",
  "Office Suites",
  "Fitness & Wellness",
  "Industrial & Warehouse",
  "Hotels & Hospitality",
  "Educational Facilities",
];

export default function Services() {
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
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>What We Do</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, textTransform: "uppercase", color: "#fff", lineHeight: 1.02 }}>
            Full-Service<br />
            <span style={{ color: "var(--gold)" }}>Commercial Construction</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", maxWidth: 560, lineHeight: 1.8, marginTop: 20 }}>
            Every service we offer is backed by experienced professionals, clear communication, and a commitment to quality that doesn't waver.
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 80 }}>
          {services.map((s, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: i % 2 === 0 ? "1fr 1.4fr" : "1.4fr 1fr",
              gap: 64,
              alignItems: "start",
            }}>
              {i % 2 !== 0 && (
                <div style={{
                  background: "var(--cream)",
                  padding: "48px 40px",
                  borderLeft: "4px solid var(--gold)",
                }}>
                  <div style={{ color: "var(--gold)", marginBottom: 24 }}>{s.icon}</div>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: 8 }}>{s.tagline}</div>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, textTransform: "uppercase", color: "var(--navy)", marginBottom: 20, lineHeight: 1.05 }}>{s.title}</h2>
                  <p style={{ fontSize: "0.97rem", lineHeight: 1.85, color: "var(--slate)" }}>{s.desc}</p>
                </div>
              )}
              <div style={{ paddingTop: 8 }}>
                {i % 2 === 0 && (
                  <>
                    <div style={{ color: "var(--gold)", marginBottom: 20 }}>{s.icon}</div>
                    <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: 8 }}>{s.tagline}</div>
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, textTransform: "uppercase", color: "var(--navy)", marginBottom: 20, lineHeight: 1.05 }}>{s.title}</h2>
                    <p style={{ fontSize: "0.97rem", lineHeight: 1.85, color: "var(--slate)", marginBottom: 32 }}>{s.desc}</p>
                  </>
                )}
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: i % 2 === 0 ? 0 : 32 }}>
                  <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--slate)", fontWeight: 600 }}>Includes</h4>
                  {s.features.map((f, fi) => (
                    <div key={fi} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <CheckCircle2 size={17} color="var(--gold)" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: "0.93rem", color: "var(--slate)" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              {i % 2 === 0 && (
                <div style={{
                  background: "var(--cream)",
                  padding: "48px 40px",
                  borderLeft: "4px solid var(--gold)",
                }}>
                  <div style={{ color: "var(--gold)", marginBottom: 24 }}>{s.icon}</div>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: 8 }}>{s.tagline}</div>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, textTransform: "uppercase", color: "var(--navy)", marginBottom: 20, lineHeight: 1.05 }}>{s.title}</h2>
                  <p style={{ fontSize: "0.97rem", lineHeight: 1.85, color: "var(--slate)" }}>{s.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sectors */}
      <section style={{ padding: "80px 24px", background: "var(--navy)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 32, height: 2, background: "var(--gold)" }} />
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>Industries We Serve</span>
              <div style={{ width: 32, height: 2, background: "var(--gold)" }} />
            </div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, textTransform: "uppercase", color: "#fff" }}>
              Any Sector. Any Scale.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 2 }}>
            {sectors.map((sector, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.05)",
                padding: "24px 28px",
                borderLeft: "3px solid var(--gold)",
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                color: "rgba(255,255,255,0.85)",
              }}>
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "var(--gold)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, textTransform: "uppercase", color: "#fff" }}>
              Need a Quote? Let's Talk.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", marginTop: 8 }}>Free consultations and estimates — no obligation, no pressure.</p>
          </div>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "var(--navy)", color: "#fff",
            fontFamily: "var(--font-heading)", fontWeight: 700,
            fontSize: "0.85rem", letterSpacing: "0.12em",
            textTransform: "uppercase", padding: "18px 44px",
            textDecoration: "none", whiteSpace: "nowrap",
          }}>
            Request a Free Estimate <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
