export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
      type: "SAVE_SHIPPING_INFO",
      payload: data,
    });
  
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };
  