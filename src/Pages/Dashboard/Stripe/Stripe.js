import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const Stripe = ({ data }) => {
  const { _id, price, email, serviceName } = data;
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };

  const desc = `Your are purchasing ${serviceName}`;

  useEffect(() => {
    fetch("https://rocky-coast-79726.herokuapp.com/api/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        tokenId: stripeToken?.id,
        amount: { price },
      }),
    })
      .then((res) => res.json())
      .then((data) => {});
  }, [stripeToken]);

  if (stripeToken) {
    fetch(`https://rocky-coast-79726.herokuapp.com/api/orders/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("paid successfull");
          Navigate("/dashboard");
        }
      });
  }
  return (
    <div>
      {stripeToken ? (
        <span className="text-green-600 text-lg uppercase font-bold">paid</span>
      ) : (
        <StripeCheckout
          name="FITNESS GYM"
          email={email}
          image="https://i.pinimg.com/originals/41/1a/60/411a605985ffea28ccf550d6a1442073.png"
          description={desc}
          amount={price * 100}
          token={onToken}
          stripeKey={process.env.REACT_APP_STRIPE_SECRET_KEY}
        />
      )}
    </div>
  );
};

export default Stripe;
