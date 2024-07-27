import React from "react";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const bgImage = {
  backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2EVXmnHREMszstvaj7nnP2pcokjCh9NB9sA&s"})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Banner = () => {
  return (
    <div style={bgImage}>
      <div className="min-h-[450px] bg-black/70 flex justify-center items-center py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* img section */}
            <div data-aos="zoom-in">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Wrg6RyXmsEgyksH90bx90WDKL0k_6p9vYQ&s"
                alt=""
                className="max-w-[450px] h-[280px] object-cover cursor-pointer mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,0.1)]"
              />
            </div>
            {/* text-contect section   */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0 text-white">
              <h1
                className="text-3xl sm:text-4xl font-bold font-cursive"
                data-aos="fade-up"
              >
                Premium Brand Pizza{" "}
              </h1>
              <p
                className="text-sm text-white tracking-wide leading-5"
                data-aos="fade-up"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                voluptate quo corrupti magni distinctio perferendis beatae quia
                dicta ad quisquam!
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div className="flex items-center gap-5" data-aos="fade-up">
                    <GrSecure
                      className="text-2xl h-12 w-12 shadow-sm p-3 
                      rounded-full bg-red-100 text-black"
                    />
                    <span className="text-lg">Premium Pizza</span>
                  </div>
                  <div className="flex items-center gap-5" data-aos="fade-up">
                    <IoFastFood
                      className="text-2xl h-12 w-12 shadow-sm p-3 
                      rounded-full bg-red-100 text-black"
                    />
                    <span className="text-lg">Top Rating Pizza</span>
                  </div>
                  <div
                    className="flex items-center gap-5"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <GiFoodTruck
                      className="text-2xl h-12 w-12 shadow-sm p-3 
                      rounded-full bg-red-100 text-black"
                    />
                    <span className="text-lg">Best Pizza in Our Shop</span>
                  </div>
                </div>
                <div
                  className="border-l-4 border-primary/70 pl-6 space-y-2 "
                  data-aos="slide-left"
                >
                  <h1 className="text-2xl font-semibold font-cursive">
                    More Pizza You See{" "}
                  </h1>
                  <p className="text-sm text-white py-4">
                    {" "}
                    Much like writing code, brewing the perfect cup of tea
                    requires patience, precision, and a dash of passion to
                    create a comforting blend of flavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
