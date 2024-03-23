import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import Products from "../Product/Products";

const CategoryButton = ({ onClick, imageSrc, categoryName }) => {
  return (
    <button
      onClick={onClick}
      className="lex flex-col items-center justify-end w-24 h-32 bg-white text-black rounded-lg hover:bg-gray-100 focus:outline-none p-0 m-2"
    >
      <img
        src={imageSrc}
        alt={`${categoryName} Icon`}
        className="w-16 h-16 mb-2"
      />
      <span className="mb-2">{categoryName}</span>
    </button>
  );
};

const Home = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2630&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Auto-slide interval
    const autoSlideInterval = setInterval(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 2500); // Change this value to adjust the interval (1500ms = 1.5 seconds)

    // Clear the interval when the component unmounts or when currentIndex changes
    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [currentIndex, slides.length]);

  useEffect(() => {
    if (selectedCategory) {
      console.log(selectedCategory);
    }
  }, [selectedCategory]);
  const categoryHandler = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <>
      <div className="w-full lg:overflow-x-hidden overflow-x-scroll py-4">
        <div className="flex xl:justify-center space-x-4 p-2">
          <button
            onClick={() => categoryHandler("smartphone")}
            className="flex-shrink-0 w-24 h-32 bg-white text-black rounded-lg hover:bg-gray-100 focus:outline-none p-2"
          >
            <img
              src="https://res.cloudinary.com/dozjpzjiv/image/upload/v1693772690/products/iynqfjijdgwpjevildaj.png"
              alt="Button Icon"
              className="w-16 h-16 mb-2 mx-auto"
            />
            <span className="text-sm text-center">Smartphone</span>
          </button>
          <button
            onClick={() => categoryHandler("electronics")}
            className="flex-shrink-0 w-24 h-32 bg-white text-black rounded-lg hover:bg-gray-100 focus:outline-none p-2"
          >
            <img
              src="https://res.cloudinary.com/dozjpzjiv/image/upload/v1693772690/products/vxg370r0mes6gmxcgdiv.png"
              alt="Button Icon"
              className="w-16 h-16 mb-2 mx-auto"
            />
            <span className="text-sm text-center">Electronics</span>
          </button>
          <button
            onClick={() => categoryHandler("graphics")}
            className="flex-shrink-0 w-24 h-32 bg-white text-black rounded-lg hover:bg-gray-100 focus:outline-none p-2"
          >
            <img
              src="https://res.cloudinary.com/dozjpzjiv/image/upload/v1693830485/dtbiul6hgksv3meuvryo.png"
              alt="Button Icon"
              className="w-16 h-16 mb-2 mx-auto"
            />
            <span className="text-sm text-center">Graphics</span>
          </button>
          <button
            onClick={() => categoryHandler("monitor")}
            className="flex-shrink-0 w-24 h-32 bg-white text-black rounded-lg hover:bg-gray-100 focus:outline-none p-2"
          >
            <img
              src="https://res.cloudinary.com/dozjpzjiv/image/upload/c_scale,h_80,w_80/products/v8prbcilxwssmtiatxoj.jpg"
              alt="Button Icon"
              className="w-16 h-16 mb-2 mx-auto"
            />
            <span className="text-sm text-center">Monitor</span>
          </button>
          <button
            onClick={() => categoryHandler("keyboard")}
            className="flex-shrink-0 w-24 h-32 bg-white text-black rounded-lg hover:bg-gray-100 focus:outline-none p-2"
          >
            <img
              src="https://res.cloudinary.com/dozjpzjiv/image/upload/c_scale,h_80,w_80/products/r8xxygib7pkdqirhxsd6.jpg"
              alt="Button Icon"
              className="w-16 h-16 mb-2 mx-auto"
            />
            <span className="text-sm text-center">Keyboard</span>
          </button>
        </div>
      </div>
      <div className="w-full md:w-[90%] h-[400px] lg:h-[600px] m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            ></div>
          ))}
        </div>
      </div>
      <div>
        <Products category={selectedCategory} />
      </div>
    </>
  );
};

export default Home;
