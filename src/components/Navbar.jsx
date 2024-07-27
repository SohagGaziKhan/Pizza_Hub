import React from "react";
import { Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Products",
    link: "/product",
  },
  {
    id: 4,
    name: "Contact Us",
    link: "/contact-us",
  },
];
const Navbar = () => {
  return (
    <div
      className="bg-black/90 text-white shadow-md
     bg-gray-900 "
    >
      <div className="container py-2">
        <div className="flex justify-between items-center ">
          <div
            className="flex items-center"
            data-aos="fade-down"
            data-aos-once="true"
          >
            <Link
              to="/"
              className="font-bold text-2xl sm:text-3xl flex justify-center
               items-center gap-2 tracking-wider font-cursive"
            >
              <FaPizzaSlice size={22} className="text-primary" />
              Pizza Hub
            </Link>
          </div>
          {/* this is link section  */}
          <div
            className="flex justify-between items-center gap-4"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <ul className="hidden sm:flex items-center gap-6">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  {" "}
                  <Link
                    to={menu.link}
                    className="inline-block hover:underline underline-offset-8
                     cursor-pointer text-xl py-4 text-white hover:text-red-600
                      duration-300"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className="bg-primary/70 hover:scale-105 duration-300
             text-black px-4 py-2 rounded-full flex items-center gap-3 
             hover:border-2 border-solid border-black"
            >
              Order Now
              <FaHeart
                className="text-xl text-black/40 drop-shadow-md 
              cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
