import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProductDetails,
  newReview,
} from "../../actions/productAction";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../layouts/Loader/Loader";
import ReviewCard from "./ReviewCard";
import { BsPencil } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const ProductDetails = () => {
  const params = useParams();
  const { product, error } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    dispatch(getProductDetails(params.id));
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, params.id]);

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };

  const submitReviewToggle = () => {
    setOpen(!open);
  };

  const editHandler = () => {
    Navigate(`/admin/product/${params.id}`);
  };

  const deleteHandler = () => {
    dispatch(deleteProduct(params.id));
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", params.id);

    dispatch(newReview(myForm));

    setOpen(false);
  };

  return (
    <>
      <div className="mt-10">
        {/* {product.name} */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            {product && product.images && product.images.length > 0 ? (
              <img
                src={product.images[0].url}
                alt={product.name}
                className="w-full h-auto"
                onError={(e) => {
                  console.error("Error loading image:", e);
                }}
              />
            ) : (
              <p>
                <Loader />
              </p>
            )}
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
            {user && user.role === "admin" ? (
              <>
                <button
                  onClick={editHandler}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                >
                  <BsPencil />
                </button>
                <button
                  onClick={deleteHandler}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                >
                  <AiFillDelete />
                </button>
              </>
            ) : null}

            <p className="text-gray-500 mb-2">{product.description}</p>
            <p className="text-gray-700 text-lg font-semibold mb-2">
              ₹{product.price}
            </p>
            <p
              className={`mb-2 ${
                product.Stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.Stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <button
              className={`py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded-md ${
                product.Stock <= 0 && "opacity-50 cursor-not-allowed"
              }`}
              disabled={product.Stock <= 0}
              onClick={() =>
                addToCartHandler({
                  name: product.name,
                  price: product.price,
                  id: product._id,
                  quantity: 1,
                  imgSrc: product.images[0].url,
                })
              }
            >
              Add to Cart
            </button>

            <button
              onClick={submitReviewToggle}
              className=" m-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md mt-2"
            >
              Submit Review
            </button>
          </div>
        </div>
        <h3 className="text-xl font-semibold mt-4">REVIEWS</h3>

        <div
          className={`${
            open ? "block" : "hidden"
          } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 shadow-lg z-50`}
        >
          <h2 className="text-lg font-semibold mb-2">Submit Review</h2>
          <div className="submitDialog">
            <select
              onChange={(e) => setRating(e.target.value)}
              value={rating}
              className="w-full p-2 mb-2 border border-gray-300"
            >
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>

            <textarea
              className="submitDialogTextArea w-full p-2 border border-gray-300"
              cols="30"
              rows="5"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>

            <div className="mt-2">
              <button
                onClick={submitReviewToggle}
                className="mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={reviewSubmitHandler}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {product.reviews && product.reviews[0] ? (
          <div className="reviews">
            {product.reviews.map((review) => (
              <div key={review._id}>
                <ReviewCard key={review._id} review={review} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mt-4">No Reviews Yet</p>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
