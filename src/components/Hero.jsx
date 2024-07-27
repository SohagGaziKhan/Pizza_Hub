import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[600px] sm:min-h-[600px] bg-dark flex justify-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text-centent section  */}
          <div
            className="flex flex-col justify-center gap-6 pt-12 
            sm:pt-0 text-center sm:text-left order-2 sm:order-1"
          >
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black"
            >
              We served the Best{" "}
              <span
                data-aos="zoom-out"
                data-aos-delay="300"
                className="text-red-700 font-cursive"
              >
                Pizza{" "}
              </span>{" "}
              in the World
            </h1>
            <div data-aos="fade-up" data-aos-delay="400">
              <button
                className="bg-black border-2 border-secondary hover:scale-105 duration-300 
            text-white py-2 px-8 rounded-full"
              >
                Get Your Pizza{" "}
              </button>
            </div>
          </div>
          {/* images section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="min-h-[500px] flex justify-center items-center relative order-1 sm:order-2"
          >
            <img
              data-aos-once="true"
              src="https://t4.ftcdn.net/jpg/07/03/35/07/360_F_703350714_MB4XNHTvIogOZNi7QMvRVxiSfoSDLUii.jpg"
              alt=""
              className="w-[300px] mt-4 sm:w-[450px] sm:scale-105 duration-400 mx-auto spin rounded-full"
            />
            <div
              data-aos="fade-left"
              data-aos-offset="0"
              className="bg-black p-3 rounded-xl absolute top-20 left-3"
            >
              <h1 className="text-md">Hi Friends</h1>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="0"
              className="bg-black p-3 rounded-xl absolute bottom-10 right-3"
            >
              <h1>Best Shop</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
