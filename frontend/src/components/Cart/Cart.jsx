// import React from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";

// const Cart = () => {
//   const { cartItems, subTotal, tax, shipping, total } = useSelector(
//     (state) => state.cart
//   );
//   const dispatch = useDispatch();

//   const increment = (id) => {
//     dispatch({
//       type: "addToCart",
//       payload: { id },
//     });
//     dispatch({ type: "calculatePrice" });
//   };
//   const decrement = (id) => {
//     dispatch({
//       type: "decrement",
//       payload: id,
//     });

//     dispatch({ type: "calculatePrice" });
//   };
//   const deleteHandler = (id) => {
//     dispatch({
//       type: "deleteFromCart",
//       payload: id,
//     });
//     dispatch({ type: "calculatePrice" });
//   };

//   return (
//     <div className="cart">
//       <main>
//         {cartItems.length > 0 ? (
//           cartItems.map((i) => (
//             <CartItem
//               imgSrc={i.imgSrc}
//               name={i.name}
//               price={i.price}
//               qty={i.quantity}
//               id={i.id}
//               key={i.id}
//               decrement={decrement}
//               increment={increment}
//               deleteHandler={deleteHandler}
//             />
//           ))
//         ) : (
//           <h1>No Items Yet</h1>
//         )}
//       </main>

//       <aside>
//         <h2>Subtotal: ₹{subTotal}</h2>
//         <h2>Shipping: ₹{shipping}</h2>
//         <h2>Tax: ₹{tax}</h2>
//         <h2>Total: ₹{total}</h2>
//       </aside>
//     </div>
//   );
// };

// const CartItem = ({
//   imgSrc,
//   name,
//   price,
//   qty,
//   decrement,
//   increment,
//   deleteHandler,
//   id,
// }) => (
//   <div className="cartItem">
//     <img src={imgSrc} alt="Item" />
//     <article>
//       <h3>{name}</h3>
//       <p>₹{price}</p>
//     </article>

//     <div>
//       <button onClick={() => decrement(id)}>-</button>
//       <p>{qty}</p>
//       <button onClick={() => increment(id)}>+</button>
//     </div>

//     <AiFillDelete onClick={() => deleteHandler(id)} />
//   </div>
// );

// export default Cart;


import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );

  const {isAuthenticated} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });

    dispatch({ type: "calculatePrice" });
  };
  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };
  const checkoutHandler = () => {
    isAuthenticated ? Navigate("/shipping"):Navigate("/login") ;
  };

  return (
    <div className="cart p-4 bg-gray-100 flex min-h-screen">
      <main className="w-3/4 pr-4">
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>

      <aside className="w-1/4 h-1/4 bg-white p-4 overflow-hidden">
        <h2 className="text-lg font-semibold mb-2">Summary</h2>
        <div className="mb-2">
          <p>Subtotal: ₹{subTotal}</p>
          <p>Shipping: ₹{shipping}</p>
          <p>Tax: ₹{tax}</p>
          <p>Total: ₹{total}</p>
        </div>
        <button onClick={checkoutHandler} className="w-full bg-blue-500 text-white py-2 rounded">
          Proceed to Checkout
        </button>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartItem border-b p-4 flex items-center">
    <img className="w-16 h-16 mr-4" src={imgSrc} alt="Item" />
    <div className="flex-1">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">₹{price}</p>
    </div>
    <div className="flex items-center space-x-2">
      <button
        className="bg-gray-200 p-1 rounded"
        onClick={() => decrement(id)}
      >
        -
      </button>
      <p>{qty}</p>
      <button
        className="bg-gray-200 p-1 rounded"
        onClick={() => increment(id)}
      >
        +
      </button>
    </div>
    <AiFillDelete
      className="text-red-500 cursor-pointer ml-4"
      onClick={() => deleteHandler(id)}
    />
  </div>
);

export default Cart;

