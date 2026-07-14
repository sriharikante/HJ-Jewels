import { useState, useEffect } from "react";
import logo from "./assets/logo.jpeg";

function Navbar({
  favoriteCount,
  cartCount,
  onOpenWishlist,
  onOpenCart,
  searchQuery,
  setSearchQuery,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
      console.log("Searching for:", searchQuery);
      setSearchOpen(false);
    }
  };

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="logo">
          <img src={logo} alt="Hari Jewels" />
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#collections">Collections</a></li>
          <li><a href="#products">Jewellery</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-right">
          <button
            className="header-icon search-btn"
            onClick={toggleSearch}
            title="Search"
            aria-label="Search"
            style={{ cursor: "pointer" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>

          <div
            className="header-icon"
            title="Wishlist"
            onClick={onOpenWishlist}
            style={{ cursor: "pointer" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {favoriteCount > 0 && <span className="header-count">{favoriteCount}</span>}
          </div>

          <div
            className="header-icon"
            title="Cart"
            onClick={onOpenCart}
            style={{ cursor: "pointer" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && <span className="header-count">{cartCount}</span>}
          </div>

          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {searchOpen && (
        <div className="search-overlay" onClick={toggleSearch}>
          <form className="search-form" onSubmit={handleSearch} onClick={(e) => e.stopPropagation()}>
            <input
              type="text"
              placeholder="Search jewellery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button type="submit">Search</button>
          </form>
        </div>
      )}

      <div
        className={`mobile-nav${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#collections" onClick={closeMenu}>Collections</a></li>
          <li><a href="#products" onClick={closeMenu}>Jewellery</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;