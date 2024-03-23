import React from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector } from "react-redux";
// import MetaData from "../layout/MetaData";
import "./ConfirmOrder.css"; // Make sure to update or remove this line
import { Link, useNavigate } from "react-router-dom";

const ConfirmOrder = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const Navigate = useNavigate();  
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    Navigate("/payment");
  };

  return (
    <>
      {/* <MetaData title="Confirm Order" /> */}
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:pr-4">
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-lg font-semibold mb-2">Shipping Info</h2>
              <div className="space-y-2">
                <div>
                  <p className="font-medium">Name:</p>
                  <span>{user.name}</span>
                </div>
                <div>
                  <p className="font-medium">Phone:</p>
                  <span>{shippingInfo.phoneNo}</span>
                </div>
                <div>
                  <p className="font-medium">Address:</p>
                  <span>{address}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mb-8 md:pl-4">
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-lg font-semibold mb-2">Your Cart Items:</h2>
              <div className="space-y-2">
                {cartItems &&
                  cartItems.map((item) => (
                    <div key={item.product} className="flex items-center space-x-4">
                      <img src={item.image} alt="Product" className="w-12 h-12 object-contain" />
                      <Link to={`/product/${item.product}`} className="text-blue-500 hover:underline">
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} X ₹{item.price} ={" "}
                        <b>₹{item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="font-medium">Subtotal:</p>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Shipping Charges:</p>
                <span>₹{shippingCharges}</span>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">GST:</p>
                <span>₹{tax}</span>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Total:</p>
                <span>₹{totalPrice}</span>
              </div>
            </div>

            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={proceedToPayment}
            >
              Proceed To Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
