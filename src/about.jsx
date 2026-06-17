function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="about-content">
          <span className="label">Our Story</span>

          <h2>About Hari Jewels</h2>
          <span className="rule" />

          <p>
            Hari Jewels showcases elegant jewellery collections including rings,
            necklaces and earrings. We combine luxury craftsmanship, premium
            materials and timeless beauty to create jewellery for every
            special occasion.
          </p>

          <div className="stats">
            <div className="stat">
              <h3>15+</h3>
              <p>Years of Craft</p>
            </div>
            <div className="stat">
              <h3>2K+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Designs</p>
            </div>
          </div>
        </div>

        <div className="quote-box">
          <p>
            Every piece tells a story of love, tradition and timeless elegance.
          </p>
          <span className="quote-attr">— Hari Jewels, Est. 2016</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="label">Hari Jewels</span>
            <p>
              Crafting timeless jewellery in Hyderabad since 2010. Every piece
              is a testament to heritage craftsmanship and enduring beauty.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#collections">Collections</a></li>
              <li><a href="#products">Jewellery</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+919878978787">+91 9878978787</a></li>
              <li><a href="mailto:info@harijewels.com">info@harijewels.com</a></li>
              <li><a href="#contact">Hyderabad, Telangana</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Hari Jewels. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">&#x1F4F8;</a>
            <a href="#" aria-label="Facebook">&#x1F310;</a>
            <a href="#" aria-label="WhatsApp">&#x1F4AC;</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default About;