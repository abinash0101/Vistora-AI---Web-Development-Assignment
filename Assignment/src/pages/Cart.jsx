import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

function Cart() {
    const {
        cartItems,
        increaseQty,
        decreaseQty,
        removeFromCart
    } = useContext(CartContext);

    if (cartItems.length === 0) {
        return (
            <h2 style={{ textAlign: "center", marginTop: "40px" }}>
                🛒 Cart is empty
            </h2>
        );
    }


    const totalItems = cartItems.reduce(
        (sum, item) => sum + item.qty,
        0
    );


    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                Your Cart
            </h2>


            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: "24px",
                    maxWidth: "1100px",
                    margin: "0 auto"
                }}
            >
                {cartItems.map(item => (
                    <div
                        key={item.id}
                        style={{
                            border: "1px solid #e5e7eb",
                            borderRadius: "12px",
                            padding: "14px",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                            backgroundColor: "#fff",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        }}
                    >
                        <div>
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                    width: "100%",
                                    height: "160px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                    marginBottom: "10px"
                                }}
                            />

                            <h4 style={{ margin: "6px 0" }}>{item.name}</h4>

                            <p style={{ fontWeight: "600", margin: "4px 0" }}>
                                ₹{item.price} × {item.qty}
                            </p>


                            <p style={{ color: "#6b7280", fontSize: "14px" }}>
                                Subtotal: ₹{item.price * item.qty}
                            </p>


                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    marginTop: "10px"
                                }}
                            >
                                <button
                                    onClick={() => {
                                        decreaseQty(item.id);
                                        toast.info("Quantity decreased");
                                    }}
                                    style={qtyBtn}
                                >
                                    −
                                </button>

                                <span style={{ fontWeight: "600" }}>
                                    {item.qty}
                                </span>

                                <button
                                    onClick={() => {
                                        increaseQty(item.id);
                                        toast.info("Quantity increased");
                                    }}
                                    style={qtyBtn}
                                >
                                    +
                                </button>
                            </div>
                        </div>


                        <div style={{ display: "flex", gap: "10px", marginTop: "14px" }}>
                            <button
                                style={buyBtn}
                                onClick={() => toast.success("Proceeding to checkout")}
                            >
                                Buy Now
                            </button>

                            <button
                                style={removeBtn}
                                onClick={() => {
                                    removeFromCart(item.id);
                                    toast.error("Item removed");
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>


            <div
                style={{
                    maxWidth: "1100px",
                    margin: "30px auto 0",
                    display: "flex",
                    justifyContent: "flex-end"
                }}
            >
                <h2 style={{ fontWeight: "700" }}>
                    Subtotal ({totalItems} items):{" "}
                    <span style={{ color: "#B12704" }}>
                        ₹{subtotal.toLocaleString("en-IN", {
                            minimumFractionDigits: 2
                        })}
                    </span>
                </h2>
            </div>
        </div>
    );
}

const qtyBtn = {
    width: "32px",
    height: "32px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    background: "#f9fafb",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "600"
};

const buyBtn = {
    flex: 1,
    padding: "10px",
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer"
};

const removeBtn = {
    padding: "10px 14px",
    backgroundColor: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
};

export default Cart;
