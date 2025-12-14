import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

function ProductList() {
    const { search, addToCart } = useContext(CartContext);

    const products = [
        { id: 1, name: "iPhone 15", price: 79900, category: "Electronics", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569" },
        { id: 2, name: "Wireless Headphones", price: 2999, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e" },
        { id: 3, name: "Smart Watch", price: 4999, category: "Electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
        { id: 4, name: "Laptop", price: 65999, category: "Electronics", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
        { id: 5, name: "Men's Casual T-Shirt", price: 699, category: "Fashion", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
        { id: 6, name: "Women's Denim Jacket", price: 2499, category: "Fashion", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246" },
        { id: 7, name: "Running Shoes", price: 3999, category: "Fashion", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
        { id: 8, name: "Backpack", price: 1999, category: "Accessories", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
        { id: 9, name: "Wooden Wall Clock", price: 1299, category: "Home Decor", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb" },
        { id: 10, name: "Table Lamp", price: 1599, category: "Home Decor", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4" },
        { id: 11, name: "Non-Stick Cookware Set", price: 2999, category: "Kitchen", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c" },
        { id: 12, name: "Coffee Mug", price: 399, category: "Kitchen", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
        { id: 13, name: "Atomic Habits Book", price: 499, category: "Books", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c" },
        { id: 14, name: "Office Chair", price: 8999, category: "Furniture", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7" },
        { id: 15, name: "Study Desk", price: 6999, category: "Furniture", image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9" }
    ];

    return (
        <div style={{ backgroundColor: "#f3f3f3", minHeight: "100vh" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                        gap: "20px",
                        justifyItems: "center"
                    }}
                >
                    {products
                        .filter(p => p.name.toLowerCase().includes(search))
                        .map(product => (
                            <div
                                key={product.id}
                                style={{
                                    width: "100%",
                                    maxWidth: "250px",
                                    backgroundColor: "#fff",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{
                                        width: "100%",
                                        height: "160px",
                                        objectFit: "cover"
                                    }}
                                />

                                <div style={{ padding: "10px", flexGrow: 1 }}>
                                    <h3 style={{ fontSize: "15px", fontWeight: "600", margin: "4px 0" }}>
                                        {product.name}
                                    </h3>

                                    <p style={{ fontSize: "12px", color: "#555" }}>
                                        {product.category}
                                    </p>

                                    <p style={{ fontSize: "17px", fontWeight: "bold", color: "#B12704", marginTop: "8px" }}>
                                        ₹{product.price}
                                    </p>
                                </div>

                                <div style={{ padding: "0 10px 10px" }}>
                                    <button
                                        onClick={() => {
                                            addToCart(product);
                                            toast.success("Added to cart 🛒");
                                        }}
                                        style={{
                                            width: "100%",
                                            padding: "8px",
                                            borderRadius: "8px",
                                            border: "1px solid #a88734",
                                            backgroundColor: "#f0c14b",
                                            cursor: "pointer",
                                            fontWeight: "600"
                                        }}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default ProductList;
