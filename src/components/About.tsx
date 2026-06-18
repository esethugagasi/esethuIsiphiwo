import storyVideo from "../IMG_3188.mp4";

export default function About() {
  return (
    <section
      id="About"
      style={{
        minHeight: "100vh",
        display: "flex",
        background: "#fff",
      }}
    >
      {/* LEFT SIDE - VIDEO */}
      <div
        style={{
          width: "50%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <video
          src={storyVideo}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* RIGHT SIDE - STORY */}
      <div
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 8rem",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: "500px" }}>
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            About
          </p>

          <h2
            style={{
              fontSize: "48px",
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: "32px",
            }}
          >
            Acrylic on canvas, mixed media beadwork
          </h2>

 <div
  style={{
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#666",
  }}
>
  <p style={{ marginBottom: "24px" }}>
          I work in acrylic on canvas with mixed media beadwork. 
          I grew up sitting beside my mother as she made beads, 
          learning with my hands before I understood what I was learning. 
          That memory lives in every piece and it is what makes this work mine.
  </p>

  <p style={{ marginBottom: "24px" }}>
          I paint black women in moments of stillness, of conversation, 
          of simply existing comfortable in their bodies, in themselves, unbothered. 
          That comfort is intentional. It represents the rare feeling of being around people who celebrate you
           not who they think you should be, but exactly who you are right now. Seen. Supported. Free.
  </p>

  <p>
           I grew up in the Eastern Cape, where bigger world only existed on screens. 
           Moving to Cape Town made it real and that shift, from believing something is impossible to realising it was always possible. 
           My art is a message to every person who grew up where big dreams felt too far away. 
           Where you come from does not determine where you are going.
  </p>
</div>
        </div>
      </div>
    </section>
  );
}