import { useParams, useNavigate } from "react-router-dom";
import { PAINTINGS } from "./Gallery";

export default function PaintingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const painting = PAINTINGS.find((p) => p.id === Number(id));

  if (!painting) return <div style={{ padding: "120px 40px" }}>Painting not found.</div>;

  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", background: "#fff" }}>
      
      {/* Back button */}
      <button
        onClick={() => navigate("/gallery")}
        style={{
          position: "fixed",
          top: "40px",
          left: "40px",
          background: "none",
          border: "none",
          fontSize: "11px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          cursor: "pointer",
          color: "#111",
          zIndex: 100,
        }}
      >
        ← Back
      </button>

      {/* Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          padding: "40px 80px",
          maxWidth: "1200px",
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {/* Image */}
        <div style={{ overflow: "hidden" }}>
          <img
            src={painting.image}
            style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* Info */}
        <div style={{ paddingTop: "40px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "#aaa", marginBottom: "20px" }}>
            Esethu Isiphiwo
          </div>
          <div style={{ fontSize: "24px", letterSpacing: "2px", fontWeight: 400, marginBottom: "40px" }}>
            {painting.title}
          </div>
          <div style={{ height: "1px", background: "#eee", marginBottom: "40px" }} />
          <div style={{ fontSize: "11px", letterSpacing: "1px", color: "#999", lineHeight: "2" }}>
            Original painting · Mixed media
          </div>

          {/* Enquire button */}
          <button
            onClick={() => navigate("/#contact")}
            style={{
              marginTop: "48px",
              fontSize: "10px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              background: "#111",
              color: "#fff",
              border: "none",
              padding: "14px 32px",
              cursor: "pointer",
            }}
          >
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}