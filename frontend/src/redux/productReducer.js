import { createReducer } from "@reduxjs/toolkit";
//!pls dont remove this i worked hard for it //ashish  
// export const productReducer = createReducer(
//   {
//     //intial state for
//     // loading:true,
//     products: []
//   },
//   {
//     ALL_PRODUCT_REQUEST: (state, action) => {
//       // state.loading = false;
//       state.products = [];
//     },

//     ALL_PRODUCT_SUCCESS : (state, action) => {
//       // state.loading = false;
//       state.products = action.payload.products;
//       // state.loading = false;
      
//       // console.log("state.products",state.products);
//     },
//     ALL_PRODUCT_FAIL: (state,action) => {
//         error= action.payload
//     },

//   }
// );


// export const ProductDetailsReducer = createReducer (
//   {
//     product:{}
//   },
//   {
//   PRODUCT_DETAILS_REQUEST : (state, action) =>{
//       state.product={}
//   },
//   PRODUCT_DETAILS_SUCCESS : (state, action) =>{
//     state.product= action.payload;
//   },
// }


// ) //!pls dont remove this i worked hard for it //ashish  

export const productsReducer = createReducer(
  { products: [] },
  {
    ALL_PRODUCT_REQUEST: (state) => {
      state.loading = true;
      state.products = [];
    },
    ALL_PRODUCT_SUCCESS: (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
      state.productsCount = action.payload.productsCount;
      state.resultPerPage = action.payload.resultPerPage;
      state.filteredProductsCount = action.payload.filteredProductsCount;
    },
    ADMIN_PRODUCT_SUCCESS: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    ALL_PRODUCT_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERRORS: (state) => {
      state.error = null;
    },
  }
);

export const newProductReducer = createReducer(
  { product: {} },
  {
    NEW_PRODUCT_REQUEST: (state) => {
      state.loading = true;
    },
    NEW_PRODUCT_SUCCESS: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.product = action.payload.product;
    },
    NEW_PRODUCT_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    NEW_PRODUCT_RESET: (state) => {
      state.success = false;
    },
    CLEAR_ERRORS: (state) => {
      state.error = null;
    },
  }
);

export const updateproductReducer = createReducer(
  {},
  {
    DELETE_PRODUCT_REQUEST: (state) => {
      state.loading = true;
    },
    UPDATE_PRODUCT_REQUEST: (state) => {
      state.loading = true;
    },
    DELETE_PRODUCT_SUCCESS: (state, action) => {
      state.loading = false;
      state.isDeleted = action.payload;
    },
    UPDATE_PRODUCT_SUCCESS: (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
    },
    DELETE_PRODUCT_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    UPDATE_PRODUCT_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    DELETE_PRODUCT_RESET: (state) => {
      state.isDeleted = false;
    },
    UPDATE_PRODUCT_RESET: (state) => {
      state.isUpdated = false;
    },
    CLEAR_ERRORS: (state) => {
      state.error = null;
    },
  }
);

export const ProductDetailsReducer = createReducer(
  { product: {} },
  {
    PRODUCT_DETAILS_REQUEST: (state) => {
      state.loading = true;
    },
    PRODUCT_DETAILS_SUCCESS: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    PRODUCT_DETAILS_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERRORS: (state) => {
      state.error = null;
    },
  }
);

export const newReviewReducer = createReducer(
  {},
  {
    NEW_REVIEW_REQUEST: (state) => {
      state.loading = true;
    },
    NEW_REVIEW_SUCCESS: (state, action) => {
      state.loading = false;
      state.success = action.payload;
    },
    NEW_REVIEW_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    NEW_REVIEW_RESET: (state) => {
      state.success = false;
    },
    CLEAR_ERRORS: (state) => {
      state.error = null;
    },
  }
);

export const productReviewsReducer = createReducer(
  { reviews: [] },
  {
    ALL_REVIEW_REQUEST: (state) => {
      state.loading = true;
    },
    ALL_REVIEW_SUCCESS: (state, action) => {
      state.loading = false;
      state.reviews = action.payload;
    },
    ALL_REVIEW_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERRORS: (state) => {
      state.error = null;
    },
  }
);

export const reviewReducer = createReducer(
  {},
  {
    DELETE_REVIEW_REQUEST: (state) => {
      state.loading = true;
    },
    DELETE_REVIEW_SUCCESS: (state, action) => {
      state.loading = false;
      state.isDeleted = action.payload;
    },
    DELETE_REVIEW_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    DELETE_REVIEW_RESET: (state) => {
      state.isDeleted = false;
    },
    CLEAR_ERRORS: (state) => {
      state.error = null;
    },
  }
);
