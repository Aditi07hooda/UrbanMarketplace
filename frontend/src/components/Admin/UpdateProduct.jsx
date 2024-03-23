// import { useNavigate, useParams } from 'react-router-dom';

// import React, {useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   clearErrors,
//   updateProduct,
//   getProductDetails,
// } from "../../actions/productAction";
// import toast, { Toaster } from "react-hot-toast";
// // import MetaData from "../layout/MetaData";
// import { FaTree, FaFileAlt, FaDatabase, FaSpellCheck, FaMoneyBill } from "react-icons/fa"; // Import React Icons
// import SideBar from "./Sidebar";

// const UpdateProduct = () => {
//   const dispatch = useDispatch();
//   const Navigate = useNavigate();
//   const params = useParams();
//   const { error, product } = useSelector((state) => state.product);

//   const {
//     loading,
//     error: updateError,
//     isUpdated,
//   } = useSelector((state) => state.updateproduct);

//   const [name, setName] = useState("");
//   const [price, setPrice] = useState(0);
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [stock, setStock] = useState(0);
//   const [images, setImages] = useState([]);
//   const [oldImages, setOldImages] = useState([]);
//   const [imagesPreview, setImagesPreview] = useState([]);

//   const categories = [
//     "Laptop",
//     "Footwear",
//     "Bottom",
//     "Tops",
//     "Attire",
//     "Camera",
//     "SmartPhones",
//   ];

//   const productId = params.id;

//   useEffect(() => {
//     if (product && product._id !== productId) {
//       dispatch(getProductDetails(productId));
//     } else {
//       setName(product.name);
//       setDescription(product.description);
//       setPrice(product.price);
//       setCategory(product.category);
//       setStock(product.stock); // Changed from "Stock" to "stock"
//       setOldImages(product.images);
//     }
//     if (error) {
//       toast.error(error);
//       dispatch(clearErrors());
//     }

//     if (updateError) {
//       toast.error(updateError);
//       dispatch(clearErrors());
//     }

//     if (isUpdated) {
//       toast.success("Product Updated Successfully");
//       Navigate("/admin/products");
//       dispatch({ type: "UPDATE_PRODUCT_RESET" });
//     }
//   }, [
//     dispatch,
//     error,
//     history,
//     isUpdated,
//     productId,
//     product,
//     updateError,
//   ]);

//   const updateProductSubmitHandler = (e) => {
//     e.preventDefault();

//     const myForm = new FormData();

//     myForm.set("name", name);
//     myForm.set("price", price);
//     myForm.set("description", description);
//     myForm.set("category", category);
//     myForm.set("stock", stock); // Changed from "Stock" to "stock"

//     images.forEach((image) => {
//       myForm.append("images", image);
//     });
//     dispatch(updateProduct(productId, myForm));
//   };

//   const updateProductImagesChange = (e) => {
//     const files = Array.from(e.target.files);

//     setImages([]);
//     setImagesPreview([]);
//     setOldImages([]);

//     files.forEach((file) => {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setImagesPreview((old) => [...old, reader.result]);
//           setImages((old) => [...old, reader.result]);
//         }
//       };

//       reader.readAsDataURL(file);
//     });
//   };

//   return (
//     <>
//       {/* <MetaData title="Update Product" /> */}
//       <div className="dashboard">
//         {/* <SideBar /> */}
//         <div className="newProductContainer">
//           <form
//             className="createProductForm"
//             encType="multipart/form-data"
//             onSubmit={updateProductSubmitHandler}
//           >
//             <h1>Update Product</h1>

//             <div>
//               <FaSpellCheck /> {/* Use React Icon */}
//               <input
//                 type="text"
//                 placeholder="Product Name"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div>
//               <FaMoneyBill /> {/* Use React Icon */}
//               <input
//                 type="number"
//                 placeholder="Price"
//                 required
//                 onChange={(e) => setPrice(e.target.value)}
//                 value={price}
//               />
//             </div>

//             <div>
//               <FaFileAlt /> {/* Use React Icon */}
//               <textarea
//                 placeholder="Product Description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 cols="30"
//                 rows="1"
//               ></textarea>
//             </div>

//             <div>
//               <FaTree /> {/* Use React Icon */}
//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               >
//                 <option value="">Choose Category</option>
//                 {categories.map((cate) => (
//                   <option key={cate} value={cate}>
//                     {cate}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>

//               <input
//                 type="number"
//                 placeholder="Stock"
//                 required
//                 onChange={(e) => setStock(e.target.value)}
//                 value={stock}
//               />
//             </div>

//             <div id="createProductFormFile">
//               <input
//                 type="file"
//                 name="avatar"
//                 accept="image/*"
//                 onChange={updateProductImagesChange}
//                 multiple
//               />
//             </div>

//             <div id="createProductFormImage">
//               {oldImages &&
//                 oldImages.map((image, index) => (
//                   <img key={index} src={image.url} alt="Old Product Preview" />
//                 ))}
//             </div>

//             <div id="createProductFormImage">
//               {imagesPreview.map((image, index) => (
//                 <img key={index} src={image} alt="Product Preview" />
//               ))}
//             </div>

//           <button
//               id="createProductBtn"
//               type="submit"
//               disabled={loading ? true : false}
//             >
//               Update
//               </button>
//           </form>
//         </div>
//       </div>
//       <Toaster position="top-right" reverseOrder={false} />
//     </>
//   );
// };

// export default UpdateProduct;

import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  updateProduct,
  getProductDetails,
} from "../../actions/productAction";
import toast, { Toaster } from "react-hot-toast";
import { FaTree, FaFileAlt, FaMoneyBill, FaSpellCheck } from "react-icons/fa";
import Loader from "../layouts/Loader/Loader";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const params = useParams();
  const { error, product } = useSelector((state) => state.product);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.updateproduct);
  const [name, setName] = useState(product.name || ""); // Set default value to product.name
  const [price, setPrice] = useState(product.price || 0); // Set default value to product.price
  const [description, setDescription] = useState(product.description || ""); // Set default value to product.description
  const [category, setCategory] = useState(product.category || ""); // Set default value to product.category
  const [stock, setStock] = useState(product.stock || 0); // Set default value to product.stock
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    "laptop",
    "keyboard",
    "graphics",
    "monitor",
    "electronics",
    "smartPhones",
    "other"
  ];

  useEffect(() => {
    if (product && product._id !== params.id) {
      dispatch(getProductDetails(params.id));
    } else {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setCategory(product.category);
      setStock(product.stock);
      setOldImages(product.images);
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Product Updated Successfully");
      Navigate("/admin/products");
      dispatch({ type: "UPDATE_PRODUCT_RESET" });
    }
  }, [dispatch, error, history, isUpdated, params.id, product, updateError]);

  const updateProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("stock", stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(updateProduct(params.id, myForm));
  };

  const updateProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="updateProfileBox bg-white w-100 p-4 shadow-md">
          {loading ? (
            <Loader />
          ) : (
            <form
              className="createProductForm"
              encType="multipart/form-data"
              onSubmit={updateProductSubmitHandler}
            >
              <h1 className="pdateProfileHeading text-lg text-center border-b-2 border-gray-300 pb-2 mb-4">
                Update Product
              </h1>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Product Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border p-2 w"
                />
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  placeholder="Price"
                  required
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  className="border p-2 w-full"
                />
              </div>

              <div className="mb-4">
                <textarea
                  placeholder="Product Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  cols="30"
                  rows="1"
                  className="border p-2 w-full"
                ></textarea>
              </div>

              <div className="mb-4">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border p-2 w-full"
                >
                  <option value="">Choose Category</option>
                  {categories.map((cate) => (
                    <option key={cate} value={cate}>
                      {cate}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <input
                  type="number"
                  placeholder="Stock"
                  required
                  onChange={(e) => setStock(e.target.value)}
                  value={stock}
                  className="border p-2 w-full"
                />
              </div>

              <div className="mb-4">
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={updateProductImagesChange}
                  multiple
                  className="border p-2 w-full"
                />
              </div>

              <div className="mb-4">
                {oldImages &&
                  oldImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.url}
                      alt="Old Product Preview"
                      className="w-32 h-32 object-cover mr-2"
                    />
                  ))}
              </div>

              <div className="mb-4">
                {imagesPreview.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="Product Preview"
                    className="w-32 h-32 object-cover mr-2"
                  />
                ))}
              </div>

              <button
                id="createProductBtn"
                type="submit"
                disabled={loading ? true : false}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Update
              </button>
            </form>
          )}
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default UpdateProduct;
