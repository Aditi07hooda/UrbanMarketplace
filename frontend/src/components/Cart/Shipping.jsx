import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import {
  FaMapMarkerAlt,
  FaHome,
  FaCity,
  FaGlobe,
  FaPhone,
  FaSubway,
} from "react-icons/fa";
import { Country, State } from "country-state-city";
import { toast } from "react-hot-toast";
import CheckoutSteps from "../Cart/CheckoutSteps";

const Shipping = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length !== 10) {
      toast.error("Phone Number should be 10 digits Long");
      return;
    }
    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );
    Navigate("/order/confirm");
  };

  return (
    <>
      <CheckoutSteps activeStep={0} />

      <div className="flex justify-center">
        <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>

          <form
            className="space-y-4"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div className="flex items-center">
              <FaHome className="text-xl" />
              <input
                type="text"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="ml-2 border rounded p-2 w-full"
              />
            </div>

            <div className="flex items-center">
              <FaCity className="text-xl" />
              <input
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="ml-2 border rounded p-2 w-full"
              />
            </div>

            <div className="flex items-center">
              <FaMapMarkerAlt className="text-xl" />
              <input
                type="number"
                placeholder="Pin Code"
                required
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                className="ml-2 border rounded p-2 w-full"
              />
            </div>

            <div className="flex items-center">
              <FaPhone className="text-xl" />
              <input
                type="number"
                placeholder="Phone Number"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                className="ml-2 border rounded p-2 w-full"
                size="10"
              />
            </div>

            <div className="flex items-center">
              <FaGlobe className="text-xl" />
              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="ml-2 border rounded p-2 w-full"
              >
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>

            {country && (
              <div className="flex items-center">
                <FaSubway className="text-xl" />
                <select
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="ml-2 border rounded p-2 w-full"
                >
                  <option value="">State</option>
                  {State &&
                    State.getStatesOfCountry(country).map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
            )}

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-full disabled:bg-gray-300"
              disabled={!state}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Shipping;
