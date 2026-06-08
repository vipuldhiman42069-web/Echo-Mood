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
        minHeight: "100vh"
      }}
    >
      <div
        style={{
          flex: 1,
          padding: "40px"
        }}
      >
        <h1>Adobe Target Test Page</h1>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "300px"
          }}
        >
          <h2>Coffee Product</h2>

          <button onClick={addToCart}>
            Add To Cart
          </button>
        </div>
      </div>

      {cartDrawerOpen && (
        <div
          id="sparq-atc-drawer"
          style={{
            width: "400px",
            borderLeft: "1px solid #ddd",
            padding: "20px"
          }}
        >
          <h2>Cart Drawer</h2>

          <div
            className="atcDrawerCommon__separation_section"
            style={{
              height: "20px",
              background: "#f5f5f5",
              marginBottom: "20px"
            }}
          >
            Separation Section
          </div>

          <div>
            Existing Drawer Content
          </div>
        </div>
      )}
    </div>
  );
}