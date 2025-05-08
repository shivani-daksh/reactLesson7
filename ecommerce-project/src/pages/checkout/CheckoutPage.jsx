import axios from "axios";
import { useEffect, useState } from "react";
import { PaymentSummary } from "./PaymentSummary";
import { CheckoutHeader } from "./CheckoutHeader";
import "./CheckoutPage.css";
import { OrderSummary } from "./OrderSummary";



export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDelivereyOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios
      .get("api/delivery-options?expand=estimatedDeliveryTime")
      setDelivereyOptions(response.data);
      

      response = await axios.get("/api/payment-summary")
        setPaymentSummary(response.data);
    }
   
    fetchCheckoutData();
   
  }, []);

  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/png" href="cart-favicon.png" />

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />

          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
