import world from "../world.jpeg";
import vacation from "../vacation.jpeg";
import sip from "../oceanSip.jpeg";
import kitchen from "../kitchen.jpeg";
import "./Work.css";

export default function Work() {
  const items = [
    { id: 1, image: vacation },
    { id: 2, image: world },
    { id: 3, image: sip },
    { id: 4, image: kitchen },
  ];

  return (
    <section className="work-section">
      <div id="work" className="work-grid">
        {items.map((item) => (
          <div key={item.id} className="work-item">
            <img
              src={item.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
}