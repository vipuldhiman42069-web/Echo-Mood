import { useEffect, useState } from "react";

export default function CartTestPage() {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  useEffect(() => {
    window.Analytics = {
      global: {
        cart: {
          lines: []
        }
      }
    };

    window.globalAtc = (payload) => {
      console.log("globalAtc called", payload);

      payload.items.forEach((item) => {
        window.Analytics.global.cart.lines.push({
          sku: item.itemId,
          producthierarchy: {
            cl: {
              id: "CL164886"
            }
          }
        });
      });

      console.log(
        "Current Cart",
        window.Analytics.global.cart.lines
      );
    };
  }, []);

  const addToCart = () => {
    window.Analytics.global.cart.lines.push({
      sku: "123456",
      producthierarchy: {
        cl: {
          id: "CL164886"
        }
      }
    });

    setCartDrawerOpen(true);

    console.log("ATC Click");
  };

 return (
  <div
    style={{
      display: "flex",
      minHeight: "100vh",
      background: "#f4f4f4",
      fontFamily: "Arial, sans-serif"
    }}
  >
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "80px"
      }}
    >
      <div
        style={{
          width: "350px",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            height: "220px",
            background: "#ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px"
          }}
        >
          Product Image
        </div>

        <div style={{ padding: "20px" }}>
          <h2 style={{ marginTop: 0 }}>
            Premium Coffee Pods
          </h2>

          <p style={{ color: "#666" }}>
            Sample product used for Adobe Target
            cart drawer testing.
          </p>

          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px"
            }}
          >
            ₹499
          </div>

          <button
            onClick={addToCart}
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              borderRadius: "8px",
              background: "#2563eb",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>

    {cartDrawerOpen && (
      <div
        id="sparq-atc-drawer"
        style={{
          width: "420px",
          background: "#fff",
          borderLeft: "1px solid #ddd",
          padding: "24px",
          boxShadow: "-3px 0 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2
          style={{
            marginTop: 0,
            marginBottom: "20px"
          }}
        >
          Cart Drawer
        </h2>

        <div
          className="atcDrawerCommon__separation_section"
          style={{
            height: "50px",
            background: "#f5f5f5",
            border: "2px dashed #bbb",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            fontWeight: "bold",
            color: "#666"
          }}
        >
          Adobe Target Injects Here
        </div>

        <div
          style={{
            padding: "16px",
            background: "#fafafa",
            borderRadius: "8px",
            marginBottom: "12px"
          }}
        >
          Existing Drawer Content
        </div>

        <div
          style={{
            padding: "16px",
            background: "#fafafa",
            borderRadius: "8px",
            marginBottom: "12px"
          }}
        >
          Recommendations
        </div>

        <div
          style={{
            padding: "16px",
            background: "#fafafa",
            borderRadius: "8px"
          }}
        >
          Cart Summary
        </div>
      </div>
    )}
  </div>
);
}