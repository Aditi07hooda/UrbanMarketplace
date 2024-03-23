import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {
    user: {},
    
  },
  {
    REGISTER_USER_REQUEST: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    LOAD_USER_REQUEST: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    LOGIN_REQUEST: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    },
    REGISTER_USER_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    LOAD_USER_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    LOGIN_SUCCESS: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    LOGOUT_SUCCESS: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
    },
    REGISTER_USER_FAIL: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    LOGIN_FAIL: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    LOAD_USER_FAIL: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    LOGOUT_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERRORS: (state) => {
      state.error = null;
    },
  }
);

export const profileReducer = createReducer(
    {},
  {
    UPDATE_PROFILE_REQUEST: (state) => {
      state.loading = true;
    },
    UPDATE_PASSWORD_REQUEST: (state) => {
      state.loading = true;
    },
    UPDATE_USER_REQUEST: (state) => {
      state.loading = true;
    },
    DELETE_USER_REQUEST: (state) => {
      state.loading = true;
    },
    UPDATE_PROFILE_SUCCESS: (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
    },
    UPDATE_PASSWORD_SUCCESS: (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
    },
    UPDATE_USER_SUCCESS: (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
    },
    DELETE_USER_SUCCESS: (state, action) => {
      state.loading = false;
      state.isDeleted = action.payload;
      state.message = action.payload.message;
    },
    UPDATE_PROFILE_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    UPDATE_PASSWORD_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    UPDATE_USER_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    DELETE_USER_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    UPDATE_PROFILE_RESET: (state) => {
      state.isUpdated = false;
    },
    UPDATE_PASSWORD_RESET: (state) => {
      state.isUpdated = false;
    },
    UPDATE_USER_RESET: (state) => {
      state.isUpdated = false;
    },
    DELETE_USER_RESET: (state) => {
      state.isDeleted = false;
    },
    CLEAR_ERRORS: (state) => {
      state.error = null;
    },
  }
);

export const forgotPasswordReducer = createReducer(
  {},
  {
    FORGOT_PASSWORD_REQUEST: (state) => {
      state.loading = true;
      state.error = null;
    },
    RESET_PASSWORD_REQUEST: (state) => {
      state.loading = true;
      state.error = null;
    },
    FORGOT_PASSWORD_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },

    RESET_PASSWORD_SUCCESS: (state, action) => {
      state.loading = false;
      state.success = action.payload;
    },
    FORGOT_PASSWORD_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    RESET_PASSWORD_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERRORS: (state) => {
      state.error = null;
    },
  }
);

export const allUsersReducer = createReducer(
  { users: [] },
  {
    ALL_USERS_REQUEST: (state) => {
      state.loading = true;
    },
    ALL_USERS_SUCCESS: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    ALL_USERS_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERRORS: (state) => {
      state.error = null;
    },
  }
);

export const userDetailsReducer = createReducer(
  { user: {} },
  {
    USER_DETAILS_REQUEST: (state) => {
      state.loading = true;
    },
    USER_DETAILS_SUCCESS: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    USER_DETAILS_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERRORS: (state) => {
      state.error = null;
    },
  }
);
