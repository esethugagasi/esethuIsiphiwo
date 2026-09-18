import footsteps from "../footsteps.png";
import herovid from "../herovid.mov";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-video">
        <video
          src={herovid}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div className="hero-image">
        <img src={footsteps} alt="" />
      </div>
    </section>
  );
}