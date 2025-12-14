import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Header() {
    const { cartItems, search, setSearch } = useContext(CartContext);

    const cartCount = cartItems.reduce(
        (sum, item) => sum + item.qty,
        0
    );

    return (
        <div
            style={{
                height: "60px",
                width: "100%",
                backgroundColor: "#131921",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px",
                color: "#ffffff",
                fontFamily: "Arial, sans-serif",
                boxSizing: "border-box"
            }}
        >    <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Product List
                </div>
            </Link>


            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search products..."
                    style={{
                        padding: "8px 10px",
                        width: "240px",
                        borderRadius: "4px",
                        border: "none",
                        outline: "none"
                    }}
                />

                {/* Cart Icon → Link */}
                <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
                    <div style={{ position: "relative", cursor: "pointer" }}>
                        <span style={{ fontSize: "24px" }}>🛒</span>

                        {cartCount > 0 && (
                            <span
                                style={{
                                    position: "absolute",
                                    top: "-6px",
                                    right: "-10px",
                                    backgroundColor: "#f08804",
                                    color: "#111",
                                    borderRadius: "50%",
                                    padding: "2px 6px",
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                    minWidth: "20px",
                                    textAlign: "center"
                                }}
                            >
                                {cartCount}
                            </span>
                        )}
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;

