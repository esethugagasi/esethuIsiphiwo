import footsteps from "../footsteps.png";
// import landingVideo from "../page1.mp4";
import front from "../frontPage.png"; 

export default function Hero() {
  return (
    <section
      style={{
        height: "120vh",
        display: "flex"
      }}
    >
      {/* VIDEO */}
      {/* <div style={{ width: "50%", overflow: "hidden" }}>
        <video
          src={landingVideo}
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
      </div> */}

      {/* IMAGE */}
      <div style={{ width: "50%", overflow: "hidden" }}>
        <img
          src={front}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </div>

      {/* IMAGE */}
      <div style={{ width: "50%", overflow: "hidden" }}>
        <img
          src={footsteps}
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