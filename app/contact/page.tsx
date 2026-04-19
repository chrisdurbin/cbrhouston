"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", service: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to a form service like Formspree, Resend, or Netlify Forms
    setSubmitted(true);
  };

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
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>Get in Touch</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, textTransform: "uppercase", color: "#fff", lineHeight: 1.02 }}>
            Let's Start Your<br />
            <span style={{ color: "var(--gold)" }}>Project Today</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", maxWidth: 480, lineHeight: 1.8, marginTop: 20 }}>
            Reach out for a free consultation. We'll assess your project and provide a detailed estimate at no cost.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
          {/* Info */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 2, background: "var(--gold)" }} />
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>Contact Information</span>
            </div>

            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, textTransform: "uppercase", color: "var(--navy)", marginBottom: 32, lineHeight: 1.05 }}>
              We're Ready When You Are
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 28, marginBottom: 48 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={18} color="var(--gold)" />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--slate)", fontWeight: 600, marginBottom: 4 }}>Call Us</div>
                  <a href="tel:7135550100" style={{ fontSize: "1.05rem", color: "var(--navy)", textDecoration: "none", fontWeight: 500 }}>(713) 555-0100</a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mail size={18} color="var(--gold)" />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--slate)", fontWeight: 600, marginBottom: 4 }}>Email Us</div>
                  <a href="mailto:info@crbhouston.com" style={{ fontSize: "1.05rem", color: "var(--navy)", textDecoration: "none", fontWeight: 500 }}>info@crbhouston.com</a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={18} color="var(--gold)" />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--slate)", fontWeight: 600, marginBottom: 4 }}>Location</div>
                  <span style={{ fontSize: "1.05rem", color: "var(--navy)", fontWeight: 500 }}>Houston, Texas</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <div style={{ width: 44, height: 44, background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Clock size={18} color="var(--gold)" />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--slate)", fontWeight: 600, marginBottom: 4 }}>Office Hours</div>
                  <span style={{ fontSize: "1.05rem", color: "var(--navy)", fontWeight: 500 }}>Mon – Fri: 7:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div style={{ background: "var(--cream)", padding: "28px 24px", borderLeft: "4px solid var(--gold)" }}>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", color: "var(--navy)", letterSpacing: "0.08em", marginBottom: 16 }}>
                What to Expect
              </h4>
              {[
                "Response within 1 business day",
                "Free on-site consultation",
                "Detailed written estimate",
                "No pressure, no commitment",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <CheckCircle2 size={16} color="var(--gold)" />
                  <span style={{ fontSize: "0.88rem", color: "var(--slate)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "var(--cream)", padding: "48px 44px" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "60px 20px" }}>
                <CheckCircle2 size={56} color="var(--gold)" style={{ margin: "0 auto 24px" }} />
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", fontWeight: 700, textTransform: "uppercase", color: "var(--navy)", marginBottom: 16 }}>
                  Message Received!
                </h3>
                <p style={{ color: "var(--slate)", fontSize: "1rem", lineHeight: 1.75 }}>
                  Thank you for reaching out. A member of our team will be in touch with you within 1 business day.
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: 700, textTransform: "uppercase", color: "var(--navy)", marginBottom: 32, letterSpacing: "0.04em" }}>
                  Request a Free Estimate
                </h3>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                    <div>
                      <label style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--slate)", fontWeight: 600, marginBottom: 8 }}>Your Name *</label>
                      <input
                        type="text" required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.2)", background: "#fff", fontSize: "0.95rem", fontFamily: "var(--font-body)", outline: "none" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--slate)", fontWeight: 600, marginBottom: 8 }}>Company</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.2)", background: "#fff", fontSize: "0.95rem", fontFamily: "var(--font-body)", outline: "none" }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                    <div>
                      <label style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--slate)", fontWeight: 600, marginBottom: 8 }}>Email Address *</label>
                      <input
                        type="email" required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.2)", background: "#fff", fontSize: "0.95rem", fontFamily: "var(--font-body)", outline: "none" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--slate)", fontWeight: 600, marginBottom: 8 }}>Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.2)", background: "#fff", fontSize: "0.95rem", fontFamily: "var(--font-body)", outline: "none" }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--slate)", fontWeight: 600, marginBottom: 8 }}>Service Needed</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.2)", background: "#fff", fontSize: "0.95rem", fontFamily: "var(--font-body)", outline: "none", appearance: "none" }}
                    >
                      <option value="">Select a service...</option>
                      <option>Commercial Remodeling</option>
                      <option>Design & Build</option>
                      <option>Tenant Build-Out</option>
                      <option>Construction Management</option>
                      <option>Ground-Up Construction</option>
                      <option>General Consultation</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: 28 }}>
                    <label style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--slate)", fontWeight: 600, marginBottom: 8 }}>Project Description *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project — location, size, scope, timeline..."
                      style={{ width: "100%", padding: "12px 16px", border: "1px solid rgba(10,22,40,0.2)", background: "#fff", fontSize: "0.95rem", fontFamily: "var(--font-body)", outline: "none", resize: "vertical" }}
                    />
                  </div>

                  <button type="submit" style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "var(--navy)", color: "#fff",
                    fontFamily: "var(--font-heading)", fontWeight: 700,
                    fontSize: "0.85rem", letterSpacing: "0.12em",
                    textTransform: "uppercase", padding: "16px 36px",
                    border: "none", cursor: "pointer", width: "100%",
                    justifyContent: "center", transition: "background 0.2s",
                  }}>
                    Send My Request <Send size={16} />
                  </button>

                  <p style={{ fontSize: "0.75rem", color: "var(--slate)", textAlign: "center", marginTop: 14, lineHeight: 1.6 }}>
                    We'll respond within 1 business day. Your information is kept private and never shared.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
