import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../../../Hooks/useCart";

// import "./CheckoutForm.css";

const CheckoutForm = ({ cart, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionid, setTransactionid] = useState("");
 
  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    console.log("card", card);

    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      console.log("error", error);
    } else {
      setCardError("");
      // console.log("PaymentMethod", paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log("Payment intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionid(paymentIntent.id);

      //save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cart.length,
        cartItems: cart.map((item) => item._id),
        menuItems: cart.map((item) => item.menuItemId),
        status: "Service pending",
        itemName: cart.map((item) => item.name),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log("data", res.data);
     
        if (res.data?.result?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for payment",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return (
    <div>
      <>
        <form className="w-3/4 m-8" onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="btn btn-success mt-5"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </form>
      </>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {transactionid && (
        <p className="text-green-500">
          Transaction complete with transactionid: {transactionid}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
