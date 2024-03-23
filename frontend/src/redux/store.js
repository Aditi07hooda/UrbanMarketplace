import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartReducer";
import { ProductDetailsReducer, newProductReducer, productsReducer, updateproductReducer } from "./productReducer";
import { allUsersReducer, profileReducer, userReducer } from "./reducers/userReducer";
import { newOrderReducer, myOrdersReducer, orderDetailsReducer, allOrdersReducer, orderReducer } from "./reducers/orderReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  product: ProductDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  allUsers: allUsersReducer,
  newProduct: newProductReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  allOrders: allOrdersReducer,
  orderDetails: orderDetailsReducer,
  order: orderReducer,
  updateproduct: updateproductReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ['cart'],
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});
let persistor = persistStore(store);

export { store, persistor };

// ==============================================

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     products:productsReducer,
//     product: ProductDetailsReducer,
//     user : userReducer,
//     profile: profileReducer,

// profile: profileReducer,
// forgotPassword: forgotPasswordReducer,

// newOrder: newOrderReducer,
// myOrders: myOrdersReducer,
// orderDetails: orderDetailsReducer,
// newReview: newReviewReducer,
// newProduct: newProductReducer,
// product: productReducer,
// allOrders: allOrdersReducer,
// order: orderReducer,
// allUsers: allUsersReducer,
// userDetails: userDetailsReducer,
// productReviews: productReviewsReducer,
// review: reviewReducer,
//   },
// });
// store.js

// export default store;

// ==============================================

// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
// import { cartReducer } from "./cartReducer";
// import { ProductDetailsReducer, productsReducer } from "./productReducer";
// import { profileReducer, userReducer } from "./reducers/userReducer";

// const persistConfig = {
//   key: "root", // Key to access the persisted state
//   storage, // Storage mechanism (localStorage, sessionStorage, etc.)
//   // Optionally, you can blacklist or whitelist specific reducers if needed
//   // blacklist: ["cart", "user"],
// };

// const rootReducer = {
//   cart: cartReducer,
//   products: productsReducer,
//   product: ProductDetailsReducer,
//   user: userReducer,
//   profile: profileReducer,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

// const persistor = persistStore(store);

// export { store, persistor };
