import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import Delete from "../assets/delete.png"

function ProductList() {
    const {
        search,
        addToCart,
        cartItems,
        increaseQty,
        removeFromCart,
        decreaseQty
    } = useContext(CartContext);

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

        { id: 14, name: "Office Chair", price: 8999, category: "Furniture", image: "https://images.unsplash.com/photo-1503602642458-232111445657" },
        { id: 15, name: "Study Desk", price: 6999, category: "Furniture", image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9" },
        { id: 16, name: "Office Bookshelf", price: 5499, category: "Furniture", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36" },
        { id: 17, name: "Wooden Coffee Table", price: 7999, category: "Furniture", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" },
        { id: 18, name: "Sofa Side Table", price: 3499, category: "Furniture", image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25" },
        { id: 19, name: "King Size Bed Frame", price: 25999, category: "Furniture", image: "https://images.unsplash.com/photo-1505693314120-0d443867891c" },
        { id: 20, name: "Wooden Wardrobe", price: 32999, category: "Furniture", image: "https://images.unsplash.com/photo-1582582429416-5b6c7f6b2d9c" },
        { id: 21, name: "TV Entertainment Unit", price: 18999, category: "Furniture", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
        { id: 22, name: "Dining Table Set", price: 22999, category: "Furniture", image: "https://images.unsplash.com/photo-1615873968403-89e068629265" },
        { id: 23, name: "Bedside Nightstand", price: 2999, category: "Furniture", image: "https://images.unsplash.com/photo-1616627981914-4b2c7be57e32" },
        { id: 24, name: "Recliner Arm Chair", price: 19999, category: "Furniture", image: "https://images.unsplash.com/photo-1598300053653-7d6f4d32c2bb" },
        { id: 25, name: "Wall Mounted Shelf", price: 2499, category: "Furniture", image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf" },
        { id: 26, name: "Computer Workstation Table", price: 8999, category: "Furniture", image: "https://images.unsplash.com/photo-1519710164239-07d8f1f9c1c1" },
        { id: 27, name: "Storage Ottoman", price: 4599, category: "Furniture", image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed" }
    ];


    const getCartItem = (id) => cartItems.find(item => item.id === id);

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
                        .filter(p => p.name.toLowerCase().includes(search) || p.category.toLowerCase().includes(search))
                        .map(product => {
                            const cartItem = getCartItem(product.id);

                            return (
                                <div
                                    key={product.id}
                                    style={{
                                        width: "100%",
                                        maxWidth: "250px",
                                        backgroundColor: "#fff",
                                        borderRadius: "14px",
                                        overflow: "hidden",
                                        boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
                                        display: "flex",
                                        flexDirection: "column"
                                    }}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{ width: "100%", height: "160px", objectFit: "cover" }}
                                    />

                                    <div style={{ padding: "12px", flexGrow: 1 }}>
                                        <h3 style={{ fontSize: "15px", fontWeight: "600" }}>
                                            {product.name}
                                        </h3>

                                        <p style={{ fontSize: "12px", color: "#666" }}>
                                            {product.category}
                                        </p>

                                        <p style={{
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                            color: "#B12704",
                                            marginTop: "8px"
                                        }}>
                                            ₹{product.price}
                                        </p>
                                    </div>

                                    <div style={{ padding: "0 12px 12px" }}>
                                        {cartItem ? (
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    background: "#f7f7f7",
                                                    borderRadius: "10px",
                                                    padding: "6px 10px",
                                                    border: "1px solid #ddd"
                                                }}
                                            >

                                                <button
                                                    onClick={() => {
                                                        decreaseQty(product.id)
                                                        toast.info("Quantity decreased");
                                                    }
                                                    }
                                                    style={qtyBtnStyle}
                                                >
                                                    −
                                                </button>


                                                <span style={{
                                                    fontWeight: "600",
                                                    fontSize: "14px",
                                                    minWidth: "20px",
                                                    textAlign: "center"
                                                }}>
                                                    {cartItem.qty}
                                                </span>


                                                <button
                                                    onClick={() => {
                                                        increaseQty(product.id)
                                                        toast.info("Quantity increase");
                                                    }
                                                    }
                                                    style={qtyBtnStyle}
                                                >
                                                    +
                                                </button>


                                                <button
                                                    onClick={() => {
                                                        removeFromCart(product.id);
                                                        toast.error("Removed from cart");
                                                    }}
                                                    style={removeBtnStyle}
                                                    title="Remove item"
                                                >
                                                    <img
                                                        src={Delete}
                                                        alt="Delete"
                                                        style={{
                                                            width: "18px",
                                                            height: "18px",
                                                            objectFit: "contain"
                                                        }}
                                                    />
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => {
                                                    addToCart(product);
                                                    toast.success("Added to cart 🛒");
                                                }}
                                                style={addBtnStyle}
                                            >
                                                Add to Cart
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}



const addBtnStyle = {
    width: "100%",
    padding: "9px",
    borderRadius: "10px",
    border: "1px solid #a88734",
    backgroundColor: "#f0c14b",
    cursor: "pointer",
    fontWeight: "600"
};

const qtyBtnStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold"
};

const removeBtnStyle = {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "16px",
    marginLeft: "6px"
};

export default ProductList;
