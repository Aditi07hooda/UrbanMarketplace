import React from 'react';

const About = () => {
  return (
    <section className="flex items-center py-10 bg-white xl:h-screen font-poppins ">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="relative">
              <img src="https://i.postimg.cc/QtyYkbxp/pexels-andrea-piacquadio-927022.jpg" alt="" className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded" />
              <div className="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <div className="relative">
              <h1 className="absolute -top-20 left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold dark:text-gray-200 opacity-5 md:block hidden">
                About Us
              </h1>
              <h1 className="text-3xl font-bold mb-4 md:text-5xl dark:text-black">
                Hey,
                <br />
                <span className="mt-2 block">We're Developers! 😊</span>
              </h1>
            </div>
            <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-800">
              We are a team of passionate fullstack developers pursuing engineering degrees. Our expertise includes building web applications using technologies like MongoDB, React, Node.js, Express, Tailwind CSS, and Chakra UI.
            </p>
            <p className="text-base leading-7 text-gray-500 dark:text-gray-800">
              With enthusiasm and dedication, we craft high-quality solutions that our clients love. Despite being remotely located worldwide, our commitment unites us in delivering exceptional products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
