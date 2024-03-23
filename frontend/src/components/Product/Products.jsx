import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/productAction";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import Loader from "../layouts/Loader/Loader";
import ReactPaginate from "react-paginate";

const Products = ({ category }) => {
  const params = useParams();
  const { products, filteredProductsCount } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const keyword = params.keyword;
  // console.log(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 250000]);
  const [ratings, setRatings] = useState();

  useEffect(() => {
    dispatch(getAllProducts(keyword, currentPage, price, category, ratings));
  }, [dispatch, params, currentPage, category, price, ratings]);

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
    console.log(event.selected);
  };

  return (
    <div className="mx-4 md:mx-16 mb-14">
      {" "}
      {/* Adjust margin for larger screens */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {products.length > 0 ? (
          products.map((product) => (
            <Link to={`/product/${product._id}`} key={product._id}>
              <ProductCard
                key={product._id}
                imgSrc={product.images[0]?.url || ""}
                name={product.name}
                price={product.price}
                id={product._id}
                ratings={product.ratings}
                stock={product.Stock}
                numOfReviews={product.numOfReviews}
                handler={addToCartHandler}
              />
            </Link>
          ))
        ) : (
          <h1 className="text-xl">
            <Loader />
          </h1>
        )}
      </div>
      {/* Pagination container with fixed height */}
      <div className="pagination-container h-16 flex justify-center items-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={filteredProductsCount / 8}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="flex items-center justify-center space-x-4"
          pageClassName="px-2 py-1 border rounded hover:bg-gray-200"
          // pageLinkClassName="text-blue-500"
          activeClassName="bg-blue-500 text-white border-blue-500"
          previousClassName="px-2 py-1 border rounded hover:bg-gray-200"
          nextClassName="px-2 py-1 border rounded hover:bg-gray-200"
          previousLinkClassName="text-blue-500"
          nextLinkClassName="text-blue-500"
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </div>
    </div>
  );
};

const ProductCard = ({
  imgSrc,
  name,
  price,
  id,
  ratings,
  stock,
  numOfReviews,
  handler,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 md:p-4 mt-5 transform transition-transform hover:scale-105 hover:shadow-lg">
      <div className="relative">
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-48 md:h-60 object-cover rounded-t-md"
        />
        <span className="bg-green-500 text-white px-2 py-1 rounded-full absolute top-2 right-2">
          {stock > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </div>
      <h2 className="mt-2 text-md font-semibold">{name}</h2>
      <p className="text-gray-500">₹{price}</p>
      <p className="text-gray-400">Ratings: {ratings}</p>
      <p className="text-gray-400">Reviews: {numOfReviews}</p>
      <button
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 md:px-3 rounded-md transition-transform hover:scale-105"
        onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Products;
