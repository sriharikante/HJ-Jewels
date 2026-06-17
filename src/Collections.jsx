import ringsImg from "./assets/rings/ring1.jpg";
import necklaceImg from "./assets/necklace/necklace1.jpg";
import earringsImg from "./assets/earrings/earring1.jpg";


const collections = [
  {
    img: ringsImg,
    alt: "Diamond Rings",
    category: "Collection I",
    title: "Diamond Rings",
  },
  {
    img: necklaceImg,
    alt: "Luxury Necklaces",
    category: "Collection II",
    title: "Luxury Necklaces",
  },
  {
    img: earringsImg,
    alt: "Gold Earrings",
    category: "Collection III",
    title: "Gold Earrings",
  },
];


function Collections() {
  const goToProducts = () => {
    document
      .getElementById("products")
      ?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <section className="collections" id="collections">
      <div className="section-header">
        <span className="label">Our Craft</span>
        <h2>Featured Collections</h2>
        <span className="rule" />
      </div>


      <div className="collection-grid">
        {collections.map((col) => (
          <div
            key={col.title}
            className="collection-card"
            role="button"
            tabIndex={0}
            onClick={goToProducts}
            onKeyDown={(e) => {
              if (e.key === "Enter") goToProducts();
            }}
          >
            <img src={col.img} alt={col.alt} />


            <div className="collection-overlay">
              <span className="label">{col.category}</span>


              <h3>{col.title}</h3>


              <span className="view-link">
                Explore →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Collections;