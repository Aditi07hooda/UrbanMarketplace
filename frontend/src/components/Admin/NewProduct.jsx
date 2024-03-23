import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createProduct, clearErrors } from "../../actions/productAction";
import { toast } from "react-hot-toast";
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
const NewProduct = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.newProduct);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Product Created Successfully");
      Navigate("/admin");
      dispatch({ type: "NEW_PRODUCT_RESET" });
    }
  }, [dispatch, toast, error, success]);

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

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

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Price:", price);
    console.log("Description:", description);
    console.log("Category:", category);
    console.log("Stock:", Stock);
    console.log("Images:", images);

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", Stock);

    // Debug: Log the FormData object
    console.log("FormData:", myForm);
    myForm.set("images", images);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    // dispatch(createProduct(myForm));
    const formDataToJson = (formData) => {
      const json = {};
      for (const [key, value] of formData.entries()) {
        json[key] = value;
      }
      return json;
    };

    // Usage
    const jsonRepresentation = formDataToJson(myForm);
    console.log(jsonRepresentation);
    dispatch(createProduct(jsonRepresentation));
  };

  return (
    <>
    <Sidebar/>
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Create Product
      </h1>
      <form
        onSubmit={createProductSubmitHandler}
        encType="multipart/form-data"
        className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md"
      >
        <label htmlFor="name" className="block font-medium mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label htmlFor="price" className="block font-medium mb-2">
          Price:
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          step="0.01"
          className="border border-gray-300 p-2 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label htmlFor="description" className="block font-medium mb-2">
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full mb-4 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label htmlFor="category" className="block font-medium mb-2">
          Category:
        </label>
        <textarea
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full mb-4 h-16 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label htmlFor="stock" className="block font-medium mb-2">
          Stock:
        </label>
        <input
          type="number"
          id="stock"
          value={Stock}
          onChange={(e) => setStock(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Add images input here */}

        <label htmlFor="images" className="block font-medium mb-2">
          Images:
        </label>
        <input
          type="file"
          id="createProductFormFile"
          name="avatar"
          accept="image/*"
          multiple
          onChange={createProductImagesChange}
          className="border border-gray-300 p-2 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex flex-wrap">
          {imagesPreview.map((preview, index) => (
            <img
              id="createProductFormImage"
              key={index}
              src={preview}
              alt={`Image Preview ${index}`}
              className="w-16 h-16 mr-4 mb-4 rounded"
            />
          ))}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading ? true : false}
        >
          Create Product
        </button>
      </form>
    </div>
    </>
  );
};

export default NewProduct;
