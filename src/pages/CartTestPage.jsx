import { useEffect, useState } from "react";

export default function CartTestPage() {

  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [domUpdateCount, setDomUpdateCount] = useState(0);


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




  // Simulate normal production DOM updates
  const startDomSimulation = () => {


    let counter = 0;


    const interval = setInterval(() => {


      counter++;


      const div = document.createElement("div");


      div.className = "fake-live-update";


      div.innerHTML = `
        Live cart update ${counter}
        <span>
          ${new Date().toISOString()}
        </span>
      `;


      document.body.appendChild(div);



      setDomUpdateCount(counter);



      console.log(
        "Fake DOM update created:",
        counter
      );



      setTimeout(() => {

        div.remove();

      },500);



      if(counter >= 100){

        clearInterval(interval);

        console.log(
          "Finished 100 fake updates"
        );

      }


    },1000);


  };





  // Heavy production-like DOM stress
  const simulateProductionCart = () => {


    console.log(
      "Starting production simulation"
    );


    for(let i = 0; i < 50; i++){


      setTimeout(()=>{


        const wrapper = document.createElement("div");


        wrapper.className =
          "fake-cart-component";



        wrapper.innerHTML = `

          <div>
            Recommendation Widget ${i}
          </div>

          <button>
            Add recommendation
          </button>

          <span>
            Inventory updated
          </span>

        `;



        document
        .querySelector("#sparq-atc-drawer")
        ?.appendChild(wrapper);




        console.log(
          "Production DOM component added:",
          i
        );




        setTimeout(()=>{

          wrapper.remove();


          console.log(
            "Production DOM component removed:",
            i
          );


        },300);



      }, i * 100);


    }


  };




  return (

    <div style={{padding:"20px"}}>


      <h2>
        Premium Coffee Pods
      </h2>


      <p>
        Adobe Target MutationObserver Test Page
      </p>



      <div
        style={{
          fontSize:"24px",
          marginBottom:"20px"
        }}
      >
        ₹499
      </div>




      <button
        onClick={addToCart}
        style={{
          width:"100%",
          padding:"14px",
          background:"#2563eb",
          color:"#fff",
          border:"none",
          borderRadius:"8px",
          cursor:"pointer"
        }}
      >

        Add To Cart

      </button>




      <br/>
      <br/>




      <button
        onClick={startDomSimulation}
        style={{
          width:"100%",
          padding:"14px",
          background:"#16a34a",
          color:"#fff",
          border:"none",
          borderRadius:"8px",
          cursor:"pointer"
        }}
      >

        Start Live DOM Updates

      </button>




      <br/>
      <br/>




      <button
        onClick={simulateProductionCart}
        style={{
          width:"100%",
          padding:"14px",
          background:"#dc2626",
          color:"#fff",
          border:"none",
          borderRadius:"8px",
          cursor:"pointer"
        }}
      >

        Simulate Production Cart Chaos (50 updates)

      </button>



      <p>
        Fake DOM updates:
        {domUpdateCount}
      </p>




      {
      cartDrawerOpen && (

      <div
        id="sparq-atc-drawer"
        style={{
          marginTop:"30px",
          width:"420px",
          background:"#fff",
          border:"1px solid #ddd",
          padding:"24px"
        }}
      >



        <h2>
          Cart Drawer
        </h2>




        <div
          className="atcDrawerCommon__separation_section"
          style={{
            height:"50px",
            background:"#f5f5f5",
            border:"2px dashed #bbb",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}
        >

          Adobe Target Injects Here

        </div>





        <div>
          Existing Drawer Content
        </div>


        <div>
          Recommendations
        </div>


        <div>
          Cart Summary
        </div>



      </div>

      )
      }



    </div>

  );

}