import React, { useEffect, useState } from "react";

function TargetBox({ mbox }) {
  const [offer, setOffer] = useState(null);

  useEffect(() => {
    if (!window.adobe || !window.adobe.target) return;

    window.adobe.target.getOffer({
      mbox: mbox,
      success: function (response) {
        try {
          const data = JSON.parse(response[0].content);
          setOffer(data);
        } catch (e) {
          console.log("Offer parse error", e);
        }
      },
      error: function (status, error) {
        console.log("Target error:", error);
      }
    });
  }, [mbox]);

  if (!offer) return null;

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold">{offer.title}</h2>
      <img
        src={offer.imgUrl}
        alt={offer.title}
        className="mx-auto my-4 w-64 rounded-lg"
      />
      <p className="text-slate-500">{offer.desc}</p>
    </div>
  );
}

export default TargetBox;