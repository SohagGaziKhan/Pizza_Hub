import React from "react";
import { Link } from "react-router-dom";

const backgroundStyle = {
  backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2EVXmnHREMszstvaj7nnP2pcokjCh9NB9sA&s"})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "400px",
  width: "100%",
};
const AppStore = () => {
  return (
    <>
      <div style={backgroundStyle}>
        <div className="bg-black/80 min-h-[400px]">
          <div className="container flex justify-between  py-16">
            <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
              <div
                data-aos="fade-up"
                data-aos-duration="300"
                className="space-y-6 max-w-xl mx-auto"
              >
                {/* text section */}
                <h1
                  className="text-2xl text-center sm:text-left sm:text-4xl
                 font-semibold text-white/90 pl-3"
                >
                  Pizza hub is available for Android and IOS
                </h1>
                {/* img section */}
                <div
                  className="flex flex-wrap gap-5 justify-center 
                sm:justify-start items-center"
                >
                  <Link href="/">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADMTEo4YEurEn-gXFBOfumKYAJMviq-T9ww&s"
                      alt="Play store"
                      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] 
                      rounded-md"
                    />
                  </Link>
                  <Link href="/">
                    <img
                      src="https://w7.pngwing.com/pngs/270/658/png-transparent-app-store-apple-google-play-apple-text-logo-mobile-phones.png"
                      alt="App store"
                      className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] 
                      rounded-md"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <img
                data-aos="fade-up"
                data-aos-duration="300"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7JsBpOG9F5Fs4zegihpVlL_I8BB-QxUzvXg&s"
                alt=""
                className="object-cover w-[600px] h-[300px] rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
