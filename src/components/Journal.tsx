import journal1 from "../journal.mp4";


export default function Journal() {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex"
      }}
    >
      {/* VIDEO */}
      <div id="journal" style={{ width: "100%", overflow: "hidden" }}>
        <video
          src={journal1}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </div>

    </section>
  );
}