import React, { Fragment, useEffect } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import Loader from "../layouts/Loader/Loader";
import toast from "react-hot-toast";

import {
  Box,
  Text,
  Badge,
  Spacer,
  Flex,
  Image,
  Center,
} from "@chakra-ui/react";

const OrderDetails = () => {
    const { order, error, loading } = useSelector((state) => state.orderDetails);
    const params = useParams();
    const dispatch = useDispatch();
  
  
    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch(clearErrors());
      }
  
      dispatch(getOrderDetails(params.id));
    }, [dispatch, toast, error, params.id]);
  
    return (
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <div className="orderDetailsPage">
              <div className="orderDetailsContainer">
                <Text fontSize="2xl" fontWeight="bold" mb="4">
                  Order #{order && order._id}
                </Text>
                <Text fontSize="xl" fontWeight="bold" mb="2">
                  Shipping Info
                </Text>
                <Flex mb="2" flexWrap="wrap">
                  <Box flex="1" mr="4">
                    <p>Name:</p>
                    <span>{order.user && order.user.name}</span>
                  </Box>
                  <Box flex="1" mr="4">
                    <p>Phone:</p>
                    <span>{order.shippingInfo && order.shippingInfo.phoneNo}</span>
                  </Box>
                  <Box flex="1" mr="4">
                    <p>Address:</p>
                    <span>
                      {order.shippingInfo &&
                        `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                    </span>
                  </Box>
                </Flex>
                <Text fontSize="xl" fontWeight="bold" mb="2">
                  Payment
                </Text>
                <Flex mb="2" flexWrap="wrap">
                  <Box>
                    <Badge
                      variant="solid"
                      colorScheme={
                        order.paymentInfo && order.paymentInfo.status === "succeeded"
                          ? "green"
                          : "red"
                      }
                    >
                      {order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "PAID"
                        : "NOT PAID"}
                    </Badge>
                  </Box>
                  <Spacer />
                  <Box>
                    <p>Amount:</p>
                    <span>{order.totalPrice && order.totalPrice}</span>
                  </Box>
                </Flex>
  
                <Text fontSize="xl" fontWeight="bold" mb="2">
                  Order Status
                </Text>
                <Flex mb="2" flexWrap="wrap">
                  <Box>
                    <Badge
                      variant="solid"
                      colorScheme={
                        order.orderStatus && order.orderStatus === "Delivered"
                          ? "green"
                          : "red"
                      }
                    >
                      {order.orderStatus && order.orderStatus}
                    </Badge>
                  </Box>
                </Flex>
              </div>
  
              <div className="orderDetailsCartItems">
                <Text fontSize="xl" fontWeight="bold" mb="2">
                  Order Items:
                </Text>
                <div className="orderDetailsCartItemsContainer">
                  {order.orderItems &&
                    order.orderItems.map((item) => (
                      <Flex key={item.product} alignItems="center" mb="2">
                        <Image src={item.image} alt="Product" boxSize="100px" />
                        <Link to={`/product/${item.product}`}>
                          {item.name}
                        </Link>{" "}
                        <span>
                          {item.quantity} X ₹{item.price} ={" "}
                          <b>₹{item.price * item.quantity}</b>
                        </span>
                      </Flex>
                    ))}
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  };
  
  export default OrderDetails;
  