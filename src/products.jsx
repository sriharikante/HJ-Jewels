import { useState } from "react";


import ring1 from "./assets/rings/ring1.jpg";
import ring2 from "./assets/rings/ring2.jpg";
import ring3 from "./assets/rings/ring3.jpg";
import ring4 from "./assets/rings/ring4.jpg";
import necklace1 from "./assets/necklace/necklace1.jpg";
import necklace2 from "./assets/necklace/necklace2.jpg";
import necklace3 from "./assets/necklace/necklace3.jpeg";
import necklace4 from "./assets/necklace/necklace4.png";
import earring1 from "./assets/earrings/earring1.jpg";
import earring2 from "./assets/earrings/earring2.jpg";
import earring3 from "./assets/earrings/earring3.jpg";
import earring4 from "./assets/earrings/earring4.jpg";

const products = {
    rings: [
        {
            name: "Diamond Elegance Ring",
            image: ring1,
            price: "₹1,85,000",
            badge: "New",
            material: "18K White Gold",
            purity: "Certified Diamonds",
            description:
                "A graceful diamond ring featuring brilliant-cut stones, crafted for timeless sophistication and elegance.",
        },

        {
            name: "Royal Diamond Band",
            image: ring2,
            price: "₹2,75,000",
            badge: "Luxury",
            material: "18K Gold",
            purity: "Certified Diamonds",
            description:
                "An exquisite diamond-studded band designed with luxurious detailing and exceptional craftsmanship.",
        },

        {
            name: "Pavé Diamond Ring",
            image: ring3,
            price: "₹2,95,000",
            badge: "Trending",
            material: "18K Gold",
            purity: "Certified Diamonds",
            description:
                "A stunning pavé diamond ring featuring meticulously set diamonds for unmatched brilliance and glamour.",
        },

        {
            name: "Solitaire Engagement Ring",
            image: ring4,
            price: "₹3,45,000",
            badge: "Premium",
            material: "18K Gold",
            purity: "Certified Diamond",
            description:
                "A timeless solitaire engagement ring showcasing a sparkling center diamond and elegant design.",
        },
    ],


    necklaces: [
        {
            name: "Diamond Necklace",
            image: necklace1,
            price: "₹4,25,000",
            badge: "Bestseller",
            material: "18K White Gold",
            purity: "Certified Diamonds",
            description:
                "Elegant diamond necklace crafted with brilliant-cut stones, perfect for weddings and special occasions.",
        },

        {
            name: "Solitaire Diamond Pendant",
            image: necklace2,
            price: "₹5,98,000",
            badge: "Premium",
            material: "18K White Gold",
            purity: "Certified Diamonds",
            description:
                "A timeless solitaire pendant necklace designed for modern sophistication and everyday luxury.",
        },

        {
            name: "Royal Heritage Choker",
            image: necklace3,
            price: "₹6,85,000",
            badge: "Exclusive",
            material: "22K Gold",
            purity: "BIS Hallmarked",
            description:
                "Traditional royal choker inspired by heritage craftsmanship, featuring intricate detailing and regal charm.",
        },

        {
            name: "Diamond Cascade Necklace",
            image: necklace4,
            price: "₹8,95,000",
            badge: "Luxury",
            material: "18K White Gold",
            purity: "Certified Diamonds",
            description:
                "A magnificent diamond cascade necklace crafted for grand celebrations, receptions, and luxury events.",
        },
    ],


    earrings: [
        {
            name: "Gold Jhumka",
            image: earring2, // changed from earring1
            price: "₹2,38,000",
            badge: null,
            material: "22K Gold",
            purity: "BIS Hallmarked",
            description:
                "Traditional handcrafted jhumkas blending heritage and sophistication.",
        },
        {
            name: "Diamond Stud",
            image: earring1, // changed from earring2
            price: "₹2,45,500",
            badge: "New",
            material: "18K Gold",
            purity: "Certified Diamonds",
            description:
                "Classic diamond studs designed for timeless everyday elegance.",
        },
        {
            name: "Heritage Pearl Jhumka",
            image: earring3,
            price: "₹3,15,000",
            badge: "Trending",
            material: "22K Gold",
            purity: "BIS Hallmarked",
            description:
                "Traditional pearl jhumka earrings with intricate craftsmanship and royal detailing.",
        },
        {
            name: "Solitaire Diamond Stud",
            image: earring4,
            price: "₹1,95,000",
            badge: "Luxury",
            material: "18K White Gold",
            purity: "Certified Diamond",
            description:
                "Elegant solitaire diamond stud earrings crafted for timeless sophistication and everyday luxury.",
        },
    ],
};


const categories = [
    { key: "rings", label: "Rings" },
    { key: "necklaces", label: "Necklaces" },
    { key: "earrings", label: "Earrings" },
];


function Products({
    favorites,
    setFavorites,
    cart,
    setCart,
    showWishlist,
    setShowWishlist,
    showCart,
    setShowCart,
}) {
    const [category, setCategory] = useState("rings");
    const [selectedProduct, setSelectedProduct] = useState(null);


    const toggleLike = (key) => {
        console.log("clicked", key);


        setFavorites((prev) => {
            const updated = {
                ...prev,
                [key]: !prev[key],
            };


            console.log("updated favorites:", updated);


            return updated;
        });
    };


    const addToCart = (item) => {
        setCart((prev) => [...prev, item]);
        console.log("Added to cart:", item.name);
    };


    const removeFromCart = (index) => {
        setCart((prev) => prev.filter((_, i) => i !== index));
    };


    const getFavoriteProducts = () => {
        const favList = [];
        Object.keys(favorites).forEach((key) => {
            if (favorites[key]) {
                const [cat, idx] = key.split("-");
                const product = products[cat]?.[idx];
                if (product) favList.push(product);
            }
        });
        return favList;
    };


    return (
        <section className="products" id="products">
            <div className="section-header">
                <span className="label">Browse</span>
                <h2>Our Jewellery</h2>
                <span className="rule" />
            </div>


            <div className="category-buttons">
                {categories.map(({ key, label }) => (
                    <button
                        key={key}
                        className={category === key ? "active" : ""}
                        onClick={() => setCategory(key)}
                    >
                        {label}
                    </button>
                ))}
            </div>


            <div className="product-grid">
                {products[category].map((item, index) => {
                    const likeKey = `${category}-${index}`;


                    return (
                        <div className="product-card" key={item.name}>
                            <div className="product-card-img">
                                <img src={item.image} alt={item.name} />


                                {item.badge && (
                                    <span className="product-badge">
                                        {item.badge}
                                    </span>
                                )}


                                <button
                                    className={`wishlist-btn ${favorites?.[likeKey] ? "liked" : ""
                                        }`}
                                    onClick={() => toggleLike(likeKey)}
                                    aria-label="Wishlist"
                                >
                                    {favorites?.[likeKey] ? "♥" : "♡"}
                                </button>
                            </div>


                            <div className="product-info">
                                <h3>{item.name}</h3>


                                <span className="product-price">
                                    {item.price}
                                </span>


                                <button onClick={() => setSelectedProduct(item)}>
                                    View Details
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>


            {/* Product Modal */}
            {selectedProduct && (
                <div
                    className="product-modal-overlay"
                    onClick={() => setSelectedProduct(null)}
                >
                    <div
                        className="product-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="close-modal"
                            onClick={() => setSelectedProduct(null)}
                        >
                            ✕
                        </button>


                        <div className="product-modal-content">
                            <div className="product-modal-image">
                                <img
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                />
                            </div>


                            <div className="product-modal-details">
                                <span className="label">Hari Jewels</span>


                                <h2>{selectedProduct.name}</h2>


                                <span className="modal-price">
                                    {selectedProduct.price}
                                </span>


                                <div className="product-specs">
                                    <p>
                                        <strong>Material:</strong>{" "}
                                        {selectedProduct.material}
                                    </p>


                                    <p>
                                        <strong>Purity:</strong>{" "}
                                        {selectedProduct.purity}
                                    </p>


                                    <p>
                                        <strong>Craftsmanship:</strong>{" "}
                                        Handcrafted Premium Finish
                                    </p>


                                    <p>
                                        <strong>Availability:</strong>{" "}
                                        Available for Order
                                    </p>
                                </div>


                                <p className="modal-description">
                                    {selectedProduct.description}
                                </p>


                                <div className="modal-buttons">
                                    <a
                                        href={`https://wa.me/919999999999?text=Hi, I'm interested in ${selectedProduct.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hero-btn"
                                    >
                                        <span>Enquire Now</span>
                                    </a>


                                    <button
                                        className="hero-btn"
                                        onClick={() => addToCart(selectedProduct)}
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {/* Wishlist Modal */}
            {showWishlist && (
                <div
                    className="product-modal-overlay"
                    onClick={() => setShowWishlist(false)}
                >
                    <div
                        className="product-modal"
                        onClick={(e) => e.stopPropagation()}
                        style={{ maxWidth: "700px" }}
                    >
                        <button
                            className="close-modal"
                            onClick={() => setShowWishlist(false)}
                        >
                            ✕
                        </button>


                        <div className="product-modal-details">
                            <span className="label">Hari Jewels</span>
                            <h2>My Wishlist</h2>


                            {getFavoriteProducts().length === 0 ? (
                                <p style={{ color: "var(--pewter)", marginTop: "20px" }}>
                                    Your wishlist is empty. Click ♥ on products to add them!
                                </p>
                            ) : (
                                <div style={{ marginTop: "20px" }}>
                                    {getFavoriteProducts().map((item, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                display: "flex",
                                                gap: "16px",
                                                padding: "16px",
                                                borderBottom: "1px solid var(--border-dim)",
                                                alignItems: "center",
                                            }}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                style={{
                                                    width: "80px",
                                                    height: "100px",
                                                    objectFit: "cover",
                                                    borderRadius: "4px",
                                                }}
                                            />
                                            <div style={{ flex: 1 }}>
                                                <h3 style={{ fontSize: "1.1rem", marginBottom: "4px" }}>
                                                    {item.name}
                                                </h3>
                                                <span className="product-price">
                                                    {item.price}
                                                </span>
                                            </div>
                                            <button
                                                onClick={() => addToCart(item)}
                                                style={{
                                                    padding: "8px 16px",
                                                    background: "var(--gold-dim)",
                                                    border: "1px solid var(--gold)",
                                                    color: "var(--gold)",
                                                    cursor: "pointer",
                                                    fontSize: "0.7rem",
                                                }}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}


            {/* Cart Modal */}
            {showCart && (
                <div
                    className="product-modal-overlay"
                    onClick={() => setShowCart(false)}
                >
                    <div
                        className="product-modal"
                        onClick={(e) => e.stopPropagation()}
                        style={{ maxWidth: "700px" }}
                    >
                        <button
                            className="close-modal"
                            onClick={() => setShowCart(false)}
                        >
                            ✕
                        </button>


                        <div className="product-modal-details">
                            <span className="label">Hari Jewels</span>
                            <h2>My Cart</h2>


                            {cart.length === 0 ? (
                                <p style={{ color: "var(--pewter)", marginTop: "20px" }}>
                                    Your cart is empty. Click "Add To Cart" on products!
                                </p>
                            ) : (
                                <div style={{ marginTop: "20px" }}>
                                    {cart.map((item, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                display: "flex",
                                                gap: "16px",
                                                padding: "16px",
                                                borderBottom: "1px solid var(--border-dim)",
                                                alignItems: "center",
                                            }}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                style={{
                                                    width: "80px",
                                                    height: "100px",
                                                    objectFit: "cover",
                                                    borderRadius: "4px",
                                                }}
                                            />
                                            <div style={{ flex: 1 }}>
                                                <h3 style={{ fontSize: "1.1rem", marginBottom: "4px" }}>
                                                    {item.name}
                                                </h3>
                                                <span className="product-price">
                                                    {item.price}
                                                </span>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(idx)}
                                                style={{
                                                    padding: "8px 16px",
                                                    background: "transparent",
                                                    border: "1px solid var(--border-dim)",
                                                    color: "var(--pewter)",
                                                    cursor: "pointer",
                                                    fontSize: "0.7rem",
                                                }}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}


                                    <div style={{ marginTop: "24px", textAlign: "right" }}>
                                        <a
                                            href={`https://wa.me/919878978787?text=Hi, I want to order these items: ${cart.map(i => i.name).join(", ")}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hero-btn"
                                        >
                                            <span>Checkout on WhatsApp</span>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}


export default Products;