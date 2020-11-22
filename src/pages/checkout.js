import React from "react";
import Layout from "../components/layout";
import CheckoutForm from "../components/checkout/checkout-form";

const Checkout = () => (
  <Layout>
    <div>
      <h1>Checkout Page</h1>
      <CheckoutForm />
    </div>
  </Layout>
);

export default Checkout;
