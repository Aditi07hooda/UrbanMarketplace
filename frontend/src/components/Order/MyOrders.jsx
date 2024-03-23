import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../../actions/orderAction";
import Loader from "../layouts/Loader/Loader";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
// import MetaData from "../layout/MetaData";
import { FiExternalLink } from "react-icons/fi";

const MyOrders = () => {
  const dispatch = useDispatch();

  const { loading, error, orders } = useSelector((state) => state.myOrders);
  console.log(orders);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, toast, error]);

  return (
    <>
      {/* <MetaData title={`${user.name} - Orders`} /> */}

      <div className="myOrdersPage p-4">
        <h2 id="myOrdersHeading" className="text-xl font-semibold mb-4">
          {user.name}'s Orders
        </h2>

        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-col space-y-4">
            {orders &&
              orders.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-md shadow-md p-4 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-semibold">
                      Order ID: {item._id}
                    </span>
                    <span
                      className={`${
                        item.orderStatus === "Delivered"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {item.orderStatus}
                    </span>
                    <span>Items Qty: {item.orderItems.length}</span>
                    <span>Amount: {item.totalPrice}</span>
                  </div>
                  <Link to={`/order/${item._id}`}>
                    <FiExternalLink className="text-blue-500" />
                  </Link>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyOrders;
