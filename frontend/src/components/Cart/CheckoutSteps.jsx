import React from "react";
import { FaShippingFast, FaCheck, FaMoneyBillAlt } from "react-icons/fa";

const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: "Shipping Details",
      icon: (
        <FaShippingFast
          className={`text-2xl ${
            activeStep >= 0 ? "text-black" : "text-gray-600"
          }`}
        />
      ),
    },
    {
      label: "Confirm Order",
      icon: (
        <FaCheck
          className={`text-2xl ${
            activeStep >= 1 ? "text-black" : "text-gray-600"
          }`}
        />
      ),
    },
    {
      label: "Payment",
      icon: (
        <FaMoneyBillAlt
          className={`text-2xl ${
            activeStep >= 2 ? "text-black" : "text-gray-600"
          }`}
        />
      ),
    },
  ];

  const stepClasses = (index) =>
    `flex items-center ${
      activeStep >= index ? "text-black" : "text-gray-600"
    }`;

  return (
    <div className="flex justify-center py-8">
      <div className="flex space-x-16">
        {steps.map((item, index) => (
          <div key={index} className={stepClasses(index)}>
            <div className="w-12 h-12 flex items-center justify-center bg-white border-2 border-tomato rounded-full group-hover:border-tomato">
              {item.icon}
            </div>
            <span className="ml-2 font-semibold">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutSteps;
