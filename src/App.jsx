import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Collections from "./Collections";
import Products from "./Products";
import About from "./About";
import "./App.css";


const marqueeItems = [
  "Handcrafted Excellence",
  "✦",
  "18K & 22K Gold",
  "✦",
  "Certified Diamonds",
  "✦",
  "BIS Hallmarked",
  "✦",
  "Hyderabad Heritage",
  "✦",
  "Custom Designs",
  "✦",
];


function App() {
  const [favorites, setFavorites] = useState({});
  const [cart, setCart] = useState([]);
  
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCart, setShowCart] = useState(false);



  const favoriteCount = Object.values(favorites).filter(Boolean).length;
  const cartCount = cart.length;



  const handleOpenWishlist = () => {
    console.log("handleOpenWishlist called!");
    setShowWishlist(true);
  };
  
  const handleOpenCart = () => {
    console.log("handleOpenCart called!");
    setShowCart(true);
  };
  
  const handleCloseWishlist = () => setShowWishlist(false);
  const handleCloseCart = () => setShowCart(false);



  return (
    <div className="app">
      <Navbar
        favoriteCount={favoriteCount}
        cartCount={cartCount}
        onOpenWishlist={handleOpenWishlist}
        onOpenCart={handleOpenCart}
      />



      <main>
        <Hero />
        
        {/* Marquee Strip Between Hero and Collections */}
        <div className="marquee-strip">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={index}
                className={item === "✦" ? "dot" : ""}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <Collections />
        <Products
          favorites={favorites}
          setFavorites={setFavorites}
          cart={cart}
          setCart={setCart}
          showWishlist={showWishlist}
          setShowWishlist={handleCloseWishlist}
          showCart={showCart}
          setShowCart={handleCloseCart}
        />
        <About />
      </main>
    </div>
  );
}



export default App;