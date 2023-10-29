import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_payment_getway_pk);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = total.toFixed(2)
  return (
    <div className="w-50 ml-6">
      <Helmet>
        <title>Bistro Boss | Payment</title>
      </Helmet>
      <SectionTitle
        subHeading="Please process"
        heading="Payment"
      ></SectionTitle>
      <h1 className="text-3xl">payment here..............</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={total}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
