import { useNavigate } from "react-router-dom";
import vacation from "../vacation.jpeg";
import world from "../world.jpeg";
import sip from "../oceanSip.jpeg";
import kitchen from "../kitchen.jpeg";
import { useState } from "react";

export const PAINTINGS = [
  { id: 1, image: vacation, title: "Vacation" },
  { id: 2, image: world, title: "World" },
  { id: 3, image: sip, title: "Ocean Sip" },
  { id: 4, image: kitchen, title: "Kitchen" },
];

export default function Gallery() {
  const navigate = useNavigate();
  const [liked, setLiked] = useState<number[]>([]);

  const toggleLike = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px", background: "#f5f5f5", minHeight: "100vh" }}>
      
      {/* Header */}
      <div style={{ padding: "0 40px 60px", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "#aaa" }}>
        Gallery Tour
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2px",
          padding: "0 2px",
        }}
      >
        {PAINTINGS.map((painting) => (
          <div
            key={painting.id}
            onClick={() => navigate(`/gallery/${painting.id}`)}
            style={{ cursor: "pointer", background: "#fff" }}
          >
            {/* Image */}
            <div style={{ overflow: "hidden", aspectRatio: "3/4", background: "#eee" }}>
              <img
                src={painting.image}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>

            {/* Info row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 12px",
              }}
            >
              <div>
                <div style={{ fontSize: "12px", letterSpacing: "1px", color: "#111" }}>
                  {painting.title}
                </div>
              </div>
              <span
                onClick={(e) => toggleLike(e, painting.id)}
                style={{ fontSize: "18px", cursor: "pointer", color: liked.includes(painting.id) ? "#111" : "#ccc" }}
              >
                {liked.includes(painting.id) ? "♥" : "♡"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}