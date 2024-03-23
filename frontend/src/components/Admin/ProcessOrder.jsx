import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button , Text , Icon } from "@chakra-ui/react";
import  toast  from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { CheckCircleIcon } from "@chakra-ui/icons";

import SideBar from "./Sidebar";
import {
  getOrderDetails,
  clearErrors,
  updateOrder,
} from "../../actions/orderAction";

import "./processOrder.css";
import Loader from "../layouts/Loader/Loader";


const ProcessOrder = () => {
    const { order, error, loading } = useSelector((state) => state.orderDetails);
    const { error: updateError, isUpdated } = useSelector((state) => state.order);
  
    const dispatch = useDispatch();
    const params = useParams()
  
    const [status, setStatus] = useState("");
  
    const updateOrderSubmitHandler = (e) => {
      e.preventDefault();
  
      const myForm = new FormData();
  
      myForm.set("status", status);
  
      dispatch(updateOrder(params.id, myForm));
    };
  
    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch(clearErrors());
      }
      if (updateError) {
        toast.error(updateError);
        dispatch(clearErrors());
      }
      if (isUpdated) {
        toast.success("Order Updated Successfully");
        dispatch({ type: "UPDATE_ORDER_RESET" });
      }
  
      dispatch(getOrderDetails(params.id));
    }, [dispatch, toast, error, updateError, params.id, isUpdated]);
  
    return (
      <Fragment>
        {/* Remove MetaData */}
        <div className="dashboard">
          <SideBar />
          <div className="newProductContainer">
            {loading ? (
              <Loader />
            ) : (
              <div
                className="confirmOrderPage"
                style={{
                  display: order.orderStatus === "Delivered" ? "block" : "grid",
                }}
              >
                <div>
                  <div className="confirmshippingArea">
                    <Text>Shipping Info</Text>
                    {/* ... Rest of the content ... */}
                  </div>
                  <div className="confirmCartItems">
                    <Text>Your Cart Items:</Text>
                    {/* ... Rest of the content ... */}
                  </div>
                </div>
                {/*  */}
                <div
                  style={{
                    display: order.orderStatus === "Delivered" ? "none" : "block",
                  }}
                >
                  <form
                    className="updateOrderForm"
                    onSubmit={updateOrderSubmitHandler}
                  >
                    <h1>Process Order</h1>
  
                    <div>
                    <Icon as={CheckCircleIcon} />

                      <select onChange={(e) => setStatus(e.target.value)}>
                        <option value="">Choose Category</option>
                        {order.orderStatus === "Processing" && (
                          <option value="Shipped">Shipped</option>
                        )}
  
                        {order.orderStatus === "Shipped" && (
                          <option value="Delivered">Delivered</option>
                        )}
                      </select>
                    </div>
  
                    <Button
                      id="createProductBtn"
                      type="submit"
                      isDisabled={loading || status === ""}
                    >
                      Process
                    </Button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </Fragment>
    );
  };
  
  export default ProcessOrder;
  