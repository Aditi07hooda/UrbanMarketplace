import axios from "axios";
import { server } from "../App";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/api/v1/login`,
      { email, password },
      config
    );
    localStorage.setItem("authData", JSON.stringify(data.token));

    console.log(data);
    dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({ type: "LOGIN_FAIL", payload: error.response.data.message });
  }
};

// Register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_USER_REQUEST" });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };
    console.log("register",userData);
    const { data } = await axios.post(
      `${server}/api/v1/register`,
      userData,
      config
    );
    console.log("axios",data)

    dispatch({ type: "REGISTER_USER_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({
      type: "REGISTER_USER_FAIL",
      payload: error.response.data.message,
    });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LOAD_USER_REQUEST" });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.get(`${server}/api/v1/me`, config);

    dispatch({ type: "LOAD_USER_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({ type: "LOAD_USER_FAIL", payload: error.response.data.message });
  }
};

// Logout User
export const logout = () => async (dispatch) => {
  try {

    const config = {
      withCredentials: true,
    };
    await axios.get(`${server}/api/v1/logout`, config);
    localStorage.removeItem('cartItems');
    
    dispatch({ type: "LOGOUT_SUCCESS" });
  } catch (error) {
    dispatch({ type: "LOGOUT_FAIL", payload: error.response.data.message });
  }
};

// Update Profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_PROFILE_REQUEST" });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `${server}/api/v1/me/update`,
      userData,
      config
    );

    dispatch({ type: "UPDATE_PROFILE_SUCCESS", payload: data.success });
  } catch (error) {
    dispatch({
      type: "UPDATE_PROFILE_FAIL",
      payload: error.response.data.message,
    });
  }
};

// Update Password
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_PASSWORD_REQUEST" });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `${server}/api/v1/password/update`,
      passwords,
      config
    );

    dispatch({ type: "UPDATE_PASSWORD_SUCCESS", payload: data.success });
  } catch (error) {
    dispatch({
      type: "UPDATE_PASSWORD_FAIL",
      payload: error.response.data.message,
    });
  }
};

// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "FORGOT_PASSWORD_REQUEST" });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/api/v1/password/forgot`,
      email,
      config
    );

    dispatch({ type: "FORGOT_PASSWORD_SUCCESS", payload: data.message });
  } catch (error) {
    dispatch({
      type: "FORGOT_PASSWORD_FAIL",
      payload: error.response.data.message,
    });
  }
};

// Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: "RESET_PASSWORD_REQUEST" });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `${server}/api/v1/password/reset/${token}`,
      passwords,
      config
    );

    dispatch({ type: "RESET_PASSWORD_SUCCESS", payload: data.success });
  } catch (error) {
    dispatch({
      type: "RESET_PASSWORD_FAIL",
      payload: error.response.data.message,
    });
  }
};

// get All Users
export const getAllUsers = (user) => async (dispatch) => {
  try {
    dispatch({ type: "ALL_USERS_REQUEST" });
    // const { data } = await axios.get(`${server}/api/v1/admin/users`);
    // console.log(data);

    const config = {
      headers: {
        isAuthenticatedUser: `token ${user.token}`,
      },
      withCredentials: true, // Add this line to include credentials
    };

    const { data } = await axios.get(`${server}/api/v1/admin/users`, config);
    console.log(data);

    dispatch({ type: "ALL_USERS_SUCCESS", payload: data.users });
  } catch (error) {
    dispatch({ type: "ALL_USERS_FAIL", payload: error.response.data.message });
  }
};

// export const getAllUsers = (isAdmin = false) => async (dispatch) => {
//   try {
//     dispatch({ type: "ALL_USERS_REQUEST" });

//     // Include parameters in the request URL
//     const url = isAdmin ? `${server}/api/v1/admin/users?admin=true` : `${server}/api/v1/admin/users`;

//     const { data } = await axios.get(url);

//     dispatch({ type: "ALL_USERS_SUCCESS", payload: data.users });
//   } catch (error) {
//     dispatch({ type: "ALL_USERS_FAIL", payload: error.response.data.message });
//   }
// };

// get  User Details
export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "USER_DETAILS_REQUEST" });
    const { data } = await axios.get(`${server}/api/v1/admin/user/${id}`);

    dispatch({ type: "USER_DETAILS_SUCCESS", payload: data.user });
  } catch (error) {
    dispatch({
      type: "USER_DETAILS_FAIL",
      payload: error.response.data.message,
    });
  }
};

// Update User
export const updateUser = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_USER_REQUEST" });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `${server}/api/v1/admin/user/${id}`,
      userData,
      config
    );

    dispatch({ type: "UPDATE_USER_SUCCESS", payload: data.success });
  } catch (error) {
    dispatch({
      type: "UPDATE_USER_FAIL",
      payload: error.response.data.message,
    });
  }
};

// Delete User
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_USER_REQUEST" });

    const { data } = await axios.delete(`${server}/api/v1/admin/user/${id}`);

    dispatch({ type: "DELETE_USER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "DELETE_USER_FAIL",
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
