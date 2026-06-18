
import world from "../world.jpeg";
import vacation from "../vacation.jpeg";
import sip from "../oceanSip.jpeg";
import kitchen from "../kitchen.jpeg";

export default function Work() {
 
    const items = [
    { id: 1, image: vacation },
    { id: 2, image: world },
    { id: 3, image: sip },
    { id: 4, image: kitchen }

  ];

  return (

    <section style={{ padding: "5px" }}>
      <div id="work"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "5px"
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            style={{
            // aspectRatio: "3 / 4",
              overflow: "hidden",
              background: "#f5f5f5",
              height: "520px",

              
            }}
          >
            <img
              src={item.image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.6s ease",
                cursor: "pointer"
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}