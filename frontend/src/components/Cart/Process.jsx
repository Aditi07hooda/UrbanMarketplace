import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { store } from "../../redux/store";
import { loadUser } from "../../actions/userAction";
import { useEffect, useState } from "react";
import Loader from "../layouts/Loader/Loader";
import ProtectedRoute from "../Route/ProtectedRoute";
import Payment from "./Payment";
import { server } from "../../App";

const Process = (stripe) => {
  const [stripeApiKey, setStripeApiKey] = useState("");

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  async function getStripeApiKey() {
    const { data } = await axios.get(`${server}/api/v1/stripeapikey`, config);
    console.log(data);
    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);
  return (
    <div>
      {stripeApiKey ? (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        </Elements>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Process;
