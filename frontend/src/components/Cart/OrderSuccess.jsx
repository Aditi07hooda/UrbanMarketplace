import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen orderSuccess flex items-center justify-center flex-col mt-8">
      <svg
        className="w-16 h-16 text-green-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>

      <p className="mt-4 text-xl font-semibold text-center">
        Your Order has been Placed successfully
      </p>

      <Link
        to="/orders"
        className="mt-4 text-blue-500 hover:text-blue-700 underline"
      >
        View Orders
      </Link>
    </div>
  );
};

export default OrderSuccess;
