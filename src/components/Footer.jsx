import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Products",
    link: "/products",
  },
];

// img src css code
const bgImage = {
  backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2EVXmnHREMszstvaj7nnP2pcokjCh9NB9sA&s"})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "190px",
  width: "100%",
};
const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/80 min-h-[190px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <Link
              to="/"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive
            "
            >
              Pizza Hub
            </Link>
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              ducimus magni ab ratione in necessitatibus quos. Est maxime fugit
              itaque velit provident, corrupti omnis ipsa.
            </p>
            <Link
              to="https://www.youtube.com/@ProjectWithSGK"
              className="inline-block bg-white text-orange-600 py-2 px-4 mt-5 text-sm rounded-full"
            >
              Visit Our Youtube Channel
            </Link>
          </div>
          {/* footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((link, index) => (
                  <li key={index}>
                    <Link className="inline-block hover:scale-105 duration-200">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* second link */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <Link
                      to={`${data.link}`}
                      className="inline-block hover:scale-105 duration-200 "
                    >
                      {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* our shop address  */}
            <div className="py-8 px-4 col-span-2 sm:col-auto ">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <p className="mb-3">Dhaka,Bangladesh</p>
                <p>+8880123456789</p>
              </div>
              {/* our social media account link */}
              <div className="flex justify-center gap-5 mt-6">
                <Link to="/">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </Link>{" "}
                <Link to="/">
                  <FaYoutube className="text-3xl hover:text-red-600 duration-300" />
                </Link>{" "}
                <Link to="/">
                  <FaFacebook className="text-3xl hover:text-blue-700 duration-300" />
                </Link>
                <Link to="/">
                  <FaLinkedin className="text-3xl hover:text-green-600 duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
