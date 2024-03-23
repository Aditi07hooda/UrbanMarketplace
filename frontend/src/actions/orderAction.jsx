import axios from 'axios'; 
import { server } from '../App'; 

// Create Order
export const createOrder = (order) => async (dispatch) => {
  console.log("order action", order);
  try {
    dispatch({ type: "CREATE_ORDER_REQUEST" });
    const config = {
      headers: {
        "Content-Type": "application/json",
      }, withCredentials: true 
    };
    const { data } = await axios.post(`${server}/api/v1/order/new`, order, config);

    dispatch({ type: "CREATE_ORDER_SUCCESS", payload: data });
    console.log("data", data);
  } catch (error) {
    dispatch({
      type: "CREATE_ORDER_FAIL",
      payload: error.response.data.message,
    });
  }
};

// My Orders
export const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: "MY_ORDERS_REQUEST" });
    const config = {
      headers: {
        "Content-Type": "application/json",
      }, withCredentials: true 
    };
    const { data } = await axios.get(`${server}/api/v1/orders/me`, config);

    dispatch({ type: "MY_ORDERS_SUCCESS", payload: data.orders });
  } catch (error) {
    dispatch({
      type: "MY_ORDERS_FAIL",
      payload: error.response.data.message,
    });
  }
};

// Get All Orders (admin)
export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({ type: "ALL_ORDERS_REQUEST" });
    const config = {
      headers: {
        "Content-Type": "application/json",
      }, withCredentials: true 
    };
    const { data } = await axios.get(`${server}/api/v1/admin/orders`, config);

    dispatch({ type: "ALL_ORDERS_SUCCESS", payload: data.orders });
  } catch (error) {
    dispatch({
      type: "ALL_ORDERS_FAIL",
      payload: error.response.data.message,
    });
  }
};

// Update Order
export const updateOrder = (id, order) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_ORDER_REQUEST" });

    const config = {
      headers: {
        "Content-Type": "application/json",
      }, withCredentials: true 
    };
    const { data } = await axios.put(
      `${server}/api/v1/admin/order/${id}`,
      order,
      config
    );

    dispatch({ type: "UPDATE_ORDER_SUCCESS", payload: data.success });
  } catch (error) {
    dispatch({
      type: "UPDATE_ORDER_FAIL",
      payload: error.response.data.message,
    });
  }
};

// Delete Order
export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_ORDER_REQUEST" });
    const config = {
      headers: {
        "Content-Type": "application/json",
      }, withCredentials: true 
    };
    const { data } = await axios.delete(`${server}/api/v1/admin/order/${id}`, config);

    dispatch({ type: "DELETE_ORDER_SUCCESS", payload: data.success });
  } catch (error) {
    dispatch({
      type: "DELETE_ORDER_FAIL",
      payload: error.response.data.message,
    });
  }
};

// Get Order Details
export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "ORDER_DETAILS_REQUEST" });
    const config = {
      headers: {
        "Content-Type": "application/json",
      }, withCredentials: true 
    };
    const { data } = await axios.get(`${server}/api/v1/order/${id}`, config);

    dispatch({ type: "ORDER_DETAILS_SUCCESS", payload: data.order });
  } catch (error) {
    dispatch({
      type: "ORDER_DETAILS_FAIL",
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};