import { useState } from "react";
import emailjs from "@emailjs/browser";

const PAINTINGS = [
  "VACATION",
  "THE WORLD IS YOURS",
  "OCEAN SIP",
  "THE KITCHEN",
  "Series: Becoming",
  "Commission (custom)",
];

export default function Footer() {
  const [form, setForm] = useState({ name: "", surname: "", email: "", painting: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = () => {
    if (!form.name || !form.surname || !form.email || !form.painting) {
      alert("Please fill in all fields before sending.");
      return;
    }
    console.log("Enquiry submitted:", form);
    setSubmitted(true);
    setForm({ name: "", surname: "", email: "", painting: "" });
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "inherit",
    fontSize: "12px",
    letterSpacing: "0.5px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "12px 14px",
    background: "transparent",
    color: "#111",
    outline: "none",
    width: "100%",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "10px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#999",
    marginBottom: "6px",
    display: "block",
  };

  const fields = [
    { label: "Name", name: "name", type: "text", placeholder: "First name" },
    { label: "Surname", name: "surname", type: "text", placeholder: "Last name" },
    { label: "Email", name: "email", type: "email", placeholder: "your@email.com" },
  ];

  return (
    <footer id="contact" style={{ padding: "80px 40px", borderTop: "1px solid #eee", fontSize: "12px", letterSpacing: "1px" }}>
      {/* TOP ROW */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontWeight: 600 }}>ESETHU ISIPHIWO</div>
          <div style={{ marginTop: "10px", color: "#888" }}>© 2026</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <a>About</a>
          <a>Work</a>
          <a>Journal</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <a>Instagram</a>
          <a>LinkedIn</a>
          <a>Email</a>
        </div>
      </div>

      {/* DIVIDER */}
      <div style={{ height: "1px", background: "#eee", margin: "48px 0 40px" }} />

      {/* ENQUIRY FORM */}
<div style={{ maxWidth: "700px", margin: "0 auto" }}>
  <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#aaa", textTransform: "uppercase", marginBottom: "24px", textAlign: "center" }}>
    Enquire about a painting
  </div>

  {/* 2-column grid */}
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
    {fields.map(({ label, name, type, placeholder }) => (
      <div key={name}>
        <label style={labelStyle}>{label}</label>
        <input
          type={type}
          name={name}
          value={form[name as keyof typeof form]}
          onChange={handleChange}
          placeholder={placeholder}
          style={inputStyle}
        />
      </div>
    ))}
    <div>
      <label style={labelStyle}>Painting</label>
      <select
        name="painting"
        value={form.painting}
        onChange={handleChange}
        style={{ ...inputStyle, appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23999' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
      >
        <option value="" disabled>Select a work</option>
        {PAINTINGS.map((p) => <option key={p}>{p}</option>)}
      </select>
    </div>
  </div>

  {/* Submit — constrained inside the same 700px wrapper */}
  <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
    {submitted && (
      <span style={{ fontSize: "11px", letterSpacing: "1px", color: "#888", fontStyle: "italic", marginRight: "16px" }}>
        Thank you — we'll be in touch soon.
      </span>
    )}
    <button
      onClick={handleSubmit}
      style={{
        fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase",
        background: "transparent", color: "#111", border: "1px solid #111",
        padding: "12px 28px", cursor: "pointer",
      }}
    >
      Send Enquiry
    </button>
  </div>

      </div>
    </footer>
  );
}